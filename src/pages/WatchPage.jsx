import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { movies } from '../data/movies';
import { 
  ArrowLeft, Maximize, Play, Pause, Volume2, VolumeX, Settings, MessageSquare, 
  RotateCcw, RotateCw, Layout, Monitor, ChevronUp 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WatchPage.module.css';

const WatchPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  
  const [movie, setMovie] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audioDesc, setAudioDesc] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCinematic, setIsCinematic] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playSpeed, setPlaySpeed] = useState(1);
  const [isYoutube, setIsYoutube] = useState(false);
  const [ytPlayer, setYtPlayer] = useState(null);
  const [activeEpisode, setActiveEpisode] = useState(null);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [availableQualities, setAvailableQualities] = useState([]);
  const [currentQuality, setCurrentQuality] = useState('auto');
  const [isAdPlaying, setIsAdPlaying] = useState(!user?.isPremium); // Skip ads for VIP
  const [adTimer, setAdTimer] = useState(5);

  useEffect(() => {
    // If not logged in, boot out immediately
    if (!user) {
      navigate('/login', { state: { message: "Anda harus login untuk menonton film." }});
      return;
    }

    const found = movies.find(m => m.id === parseInt(id));
    if (!found) {
      navigate('/');
      return;
    }

    // Is it premium? (Simulation: Movies with rating >= 8.5 are premium)
    const isMoviePremium = found.rating >= 8.5;

    if (isMoviePremium && !user.isPremium && user.role !== 'admin') {
      navigate('/pricing', { state: { 
        message: `Oops! "${found.title}" adalah judul Premium. Silakan berlangganan untuk menonton.`,
        movie: found 
      }});
      return;
    }

    setMovie(found);

    // Auto-hide controls
    let timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    if (found.trailerId && !found.isBilibili) {
      setIsYoutube(true);
    } else {
      setIsYoutube(false);
    }

    if (found.episodes && found.episodes.length > 0) {
      const epNum = parseInt(searchParams.get('ep')) || 1;
      const targetEp = found.episodes.find(e => e.number === epNum) || found.episodes[0];
      setActiveEpisode(targetEp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [id, user, navigate]);

  useEffect(() => {
    let timer;
    if (isAdPlaying && adTimer > 0) {
      timer = setInterval(() => {
        setAdTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isAdPlaying, adTimer]);

  // YouTube API Integration
  useEffect(() => {
    if (isYoutube && !window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    } else if (isYoutube && window.YT) {
      createPlayer();
    }

    function createPlayer() {
      const videoId = activeEpisode ? activeEpisode.ytId : movie?.trailerId;
      if (!videoId) return;

      if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
        ytPlayer.loadVideoById(videoId);
        return;
      }

      const player = new window.YT.Player('yt-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          vq: 'hd1080'
        },
        events: {
          onReady: (event) => {
            setYtPlayer(event.target);
            const d = event.target.getDuration();
            setDuration(d);
            setPlaying(true);
            // Fetch available qualities
            if (event.target.getAvailableQualityLevels) {
              setAvailableQualities(event.target.getAvailableQualityLevels());
            }
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setPlaying(true);
              if (duration === 0) setDuration(event.target.getDuration());
            }
            else setPlaying(false);
          }
        }
      });
    }

    let interval;
    if (ytPlayer && isYoutube) {
      interval = setInterval(() => {
        setProgress(ytPlayer.getCurrentTime());
        if (duration === 0 || isNaN(duration)) {
          const d = ytPlayer.getDuration();
          if (d > 0) setDuration(d);
        }
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isYoutube, movie, ytPlayer, activeEpisode]);

  if (!movie) return null;

  const togglePlay = () => {
    if (isYoutube && ytPlayer) {
      if (playing) ytPlayer.pauseVideo();
      else ytPlayer.playVideo();
      return;
    }
    const video = document.getElementById('main-video');
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (isYoutube && ytPlayer) {
      if (muted) ytPlayer.unMute();
      else ytPlayer.mute();
      setMuted(!muted);
      return;
    }
    const video = document.getElementById('main-video');
    video.muted = !video.muted;
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    const container = document.getElementById('video-container');
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    const video = document.getElementById('main-video');
    setProgress(video.currentTime);
  };

  const handleLoadedMetadata = () => {
    const video = document.getElementById('main-video');
    setDuration(video.duration);
  };

  const handleSeek = (e) => {
    const time = Number(e.target.value);
    if (isYoutube && ytPlayer) {
      ytPlayer.seekTo(time, true);
    } else {
      const video = document.getElementById('main-video');
      video.currentTime = time;
    }
    setProgress(time);
  };

  const skipTime = (amount) => {
    if (isYoutube && ytPlayer) {
      const newTime = Math.min(Math.max(ytPlayer.getCurrentTime() + amount, 0), duration);
      ytPlayer.seekTo(newTime, true);
      setProgress(newTime);
    } else {
      const video = document.getElementById('main-video');
      video.currentTime = Math.min(Math.max(video.currentTime + amount, 0), duration);
    }
  };

  const handleVolumeChange = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (isYoutube && ytPlayer) {
      ytPlayer.setVolume(val * 100);
    } else {
      const video = document.getElementById('main-video');
      video.volume = val;
    }
    if (val === 0) setMuted(true);
    else setMuted(false);
  };

  const handleSpeedChange = (speed) => {
    if (isYoutube && ytPlayer) {
      ytPlayer.setPlaybackRate(speed);
    } else {
      const video = document.getElementById('main-video');
      video.playbackRate = speed;
    }
    setPlaySpeed(speed);
  };

  const handleQualityChange = (quality) => {
    if (isYoutube && ytPlayer) {
      ytPlayer.setPlaybackQuality(quality);
      setCurrentQuality(quality);
      setShowSettings(false);
    }
  };

  const toggleCinematic = () => {
    setIsCinematic(!isCinematic);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const getVideoSource = () => {
    // 1. Check for specific movie IDs that need special assets or hardcoded links
    const specificMapping = {
      "trailer": "https://media.w3.org/2010/05/sintel/trailer.mp4"
    };
    if (specificMapping[movie.id]) return specificMapping[movie.id];
    
    // 2. Genre-based mapping for diversity
    const genreMapping = {
      "Anime": "https://media.w3.org/2010/05/sintel/trailer.mp4",
      "Action": "https://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_stereo_subs.mp4",
      "Sci-Fi": "https://www.w3schools.com/html/mov_bbb.mp4",
      "Horror": "https://media.w3.org/2010/05/bunny/trailer.mp4"
    };

    return genreMapping[movie?.genre] || "https://media.w3.org/2010/05/sintel/trailer.mp4";
  };

  return (
    <div className={`${styles.watchContainer} ${isCinematic ? styles.cinematicMode : ''} ${showControls ? styles.uiVisible : ''}`} id="video-container">
      {/* 
        Official Studio Trailer or Cinematic Clip Engine
      */}
      <div className={styles.videoWrapper}>
        {movie.isBilibili ? (
          <iframe 
            src={`https://www.bilibili.tv/id/embed/${movie.trailerId}`} 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen="true" 
            webkitallowfullscreen="true" 
            mozallowfullscreen="true"
            className={styles.videoPlayer}
            style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
          ></iframe>
        ) : isYoutube ? (
          <div id="yt-player" className={styles.videoPlayer}></div>
        ) : (
          <video
            id="main-video"
            className={styles.videoPlayer}
            src={getVideoSource()}
            autoPlay
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          ></video>
        )}

        {isAdPlaying && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'black', zIndex: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ padding: '40px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ marginBottom: '20px', color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Video Sponsor</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Iklan Sedang Menayangkan...</h2>
              <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                {adTimer > 0 ? (
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '5px', fontSize: '0.9rem' }}>Lewati dalam {adTimer}s</div>
                ) : (
                  <button 
                    onClick={() => setIsAdPlaying(false)}
                    style={{ background: '#e50914', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}
                  >
                    Lewati Iklan <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Episode Sidebar */}
      {movie.episodes && movie.episodes.length > 0 && (
        <div className={`${styles.episodeSidebar} ${showEpisodes ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <h3>Daftar Episode</h3>
            <button onClick={() => setShowEpisodes(false)}><ArrowLeft size={20} /></button>
          </div>
          <div className={styles.episodeList}>
            {movie.episodes.map((ep) => (
              <div 
                key={ep.number} 
                className={`${styles.episodeItem} ${activeEpisode?.number === ep.number ? styles.activeEpisode : ''}`}
                onClick={() => {
                  setActiveEpisode(ep);
                  setShowEpisodes(false);
                }}
              >
                <span className={styles.epNumber}>{ep.number}</span>
                <span className={styles.epTitle}>{ep.title}</span>
                {activeEpisode?.number === ep.number && <Play size={14} fill="currentColor" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <div className={`${styles.controlsOverlay} ${showControls ? styles.visible : styles.hidden}`}>
        <div className={styles.topBar}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            <ArrowLeft size={28} />
          </button>
          <div className={styles.titleInfo}>
            <h2>{movie.title} {activeEpisode && `- Episode ${activeEpisode.number}`}</h2>
            {audioDesc && <span className={styles.adBadge}>Audio Description Active</span>}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.progressBarContainer}>
            <span className={styles.timeText}>{formatTime(progress)}</span>
            <input 
              type="range" 
              className={styles.progressBar} 
              min="0" 
              max={duration || 100} 
              value={progress} 
              onChange={handleSeek} 
            />
            <span className={styles.timeText}>{formatTime(duration)}</span>
          </div>
          
          <div className={styles.controlsRow}>
            <div className={styles.leftControls}>
              <button onClick={() => skipTime(-10)} title="Mundur 10 detik">
                <RotateCcw size={28} />
              </button>
              <button onClick={togglePlay}>
                {playing ? <Pause size={32} /> : <Play size={32} fill="currentColor" />}
              </button>
              <button onClick={() => skipTime(10)} title="Maju 10 detik">
                <RotateCw size={28} />
              </button>
              
              <div className={styles.volumeContainer}>
                <button onClick={toggleMute}>
                  {muted ? <VolumeX size={28} /> : <Volume2 size={28} />}
                </button>
                <input 
                  type="range" 
                  className={styles.volumeSlider}
                  min="0" max="1" step="0.1"
                  value={muted ? 0 : volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>

            <div className={styles.rightControls}>
              {movie.episodes && movie.episodes.length > 0 && (
                <button 
                  className={styles.marathonBtn}
                  onClick={() => setShowEpisodes(!showEpisodes)}
                  title="Daftar Episode"
                >
                  <Layout size={24} />
                  <span>Episode</span>
                </button>
              )}

              <div className={styles.settingsSelector}>
                <button onClick={() => setShowSettings(!showSettings)} title="Kualitas Video">
                  <Settings size={26} className={showSettings ? styles.activeIcon : ''} />
                </button>
                <AnimatePresence>
                  {showSettings && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={styles.settingsMenu}
                    >
                      <h4>Kualitas</h4>
                      {availableQualities.map(q => (
                        <button 
                          key={q} 
                          onClick={() => handleQualityChange(q)}
                          className={currentQuality === q ? styles.activeOption : ''}
                        >
                          {q.toUpperCase()}
                        </button>
                      ))}
                      {availableQualities.length === 0 && (
                        <>
                          <button onClick={() => handleQualityChange('hd1080')}>1080P</button>
                          <button onClick={() => handleQualityChange('hd720')}>720P</button>
                          <button onClick={() => handleQualityChange('medium')}>480P</button>
                          <button onClick={() => handleQualityChange('auto')} className={styles.activeOption}>OTOMATIS</button>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className={styles.speedSelector}>
                <button>
                  <span>{playSpeed}x</span>
                </button>
                <div className={styles.speedOptions}>
                  {[0.5, 1, 1.5, 2].map(s => (
                    <button key={s} onClick={() => handleSpeedChange(s)} className={playSpeed === s ? styles.activeSpeed : ''}>
                      {s}x
                    </button>
                  ))}
                </div>
              </div>

              <button 
                className={`${styles.modeToggle} ${isCinematic ? styles.activeMode : ''}`}
                onClick={toggleCinematic}
                title="Toggle Mode Sinematik"
              >
                <Layout size={24} />
                <span>Sinematik</span>
              </button>

              <button onClick={toggleFullscreen} title="Full Screen">
                <Maximize size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
