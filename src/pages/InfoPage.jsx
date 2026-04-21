import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, Share2, Download, Info, Star, ChevronDown, List, Clock, MessageSquare } from 'lucide-react';
import { movies } from '../data/movies';
import { useAuth } from '../context/AuthContext';
import styles from './InfoPage.module.css';

const InfoPage = ({ onOpenPricing }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [movie, setMovie] = useState(null);
  const [activeTab, setActiveTab] = useState('episodes');
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const found = movies.find(m => m.id === parseInt(id));
    if (found) {
      setMovie(found);
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  if (!movie) return null;

  const handlePlay = (epNumber = 1) => {
    if (loading) return; // Prevent action while checking auth

    const episode = (movie.episodes || []).find(e => e.number === epNumber) || { number: epNumber, isVIP: movie.isVIP };
    
    if (episode.isVIP && (!user || !user.isPremium)) {
      navigate('/pricing', { 
        state: { 
          message: `Oops! "${movie.title}" adalah judul Premium. Silakan berlangganan untuk menonton.`,
          movie 
        } 
      });
      return;
    }
    navigate(`/watch/${movie.id}?ep=${epNumber}`);
  };

  return (
    <div className={styles.infoPage}>
      {toast && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={styles.toast}
        >
          {toast}
        </motion.div>
      )}

      {/* Cinematic Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.backdropMask}>
          {movie.trailerId ? (
            <div className={styles.trailerWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movie.trailerId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&origin=${window.location.origin}`}
                title="Trailer Background"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className={styles.backgroundVideo}
              ></iframe>
              <div className={styles.videoDimmer}></div>
            </div>
          ) : (
            <img src={movie.backdrop} alt={movie.title} className={styles.heroBackdrop} />
          )}
          <div className={styles.gradientOverlay}></div>
        </div>

        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.mainMeta}
          >
            {movie.category === 'Series' || movie.type === 'series' ? (
              <span className={styles.typeBadge}>Original</span>
            ) : null}
            <h1 className={styles.title}>{movie.title}</h1>
            
            <div className={styles.metaRow}>
              <span className={styles.rating}><Star size={16} fill="gold" /> {movie.rating}</span>
              <span className={styles.year}>{movie.year}</span>
              <span className={styles.age}>13+</span>
              <span className={styles.genre}>{movie.genre}</span>
              <span className={styles.country}>{movie.country}</span>
            </div>

            <p className={styles.description}>{movie.description}</p>

            <div className={styles.actionRow}>
              <button className={styles.playBtn} onClick={() => handlePlay()}>
                <Play fill="currentColor" /> Putar Sekarang
              </button>
              <button className={styles.iconBtn} onClick={() => showToast('Ditambahkan ke daftar saya')}><Plus /></button>
              <button className={styles.iconBtn} onClick={() => showToast('Link berhasil disalin!')}><Share2 /></button>
              <button className={styles.iconBtn} onClick={() => showToast('Memulai pengunduhan...')}><Download /></button>
            </div>

            <div className={styles.crewInfo}>
              <p><span>Sutradara:</span> {movie.director}</p>
              <p><span>Pemeran:</span> {movie.cast || 'Pengisi Suara Muse Indonesia'}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Tabs Section (iQIYI Style) */}
      <div className={styles.contentSection}>
        <div className={styles.tabsContainer}>
          <div className={styles.tabsMenu}>
                <button 
                  className={activeTab === 'episodes' ? styles.activeTab : ''} 
                  onClick={() => setActiveTab('episodes')}
                >
                  {movie.type === 'movie' ? 'Putar' : 'Episode'}
                </button>
                <button 
                  className={activeTab === 'cast' ? styles.activeTab : ''} 
                  onClick={() => setActiveTab('cast')}
                >
                  Pemeran
                </button>
                <button 
                  className={activeTab === 'recommended' ? styles.activeTab : ''} 
                  onClick={() => setActiveTab('recommended')}
                >
                  Rekomendasi
                </button>
              </div>

              <div className={styles.tabContent}>
                <AnimatePresence mode="wait">
                  {activeTab === 'episodes' && (
                    <motion.div 
                      key="episodes"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={styles.episodesTab}
                    >
                      {movie.type !== 'movie' && (
                        <div className={styles.epSelectorRow}>
                          <div className={styles.rangeSelector}>
                            <span>Episode 1-{movie.episodes ? movie.episodes.length : '?'}</span>
                            <ChevronDown size={16} />
                          </div>
                        </div>
                      )}

                      <div className={styles.episodeList}>
                        {movie.type === 'movie' ? (
                          <div 
                            className={styles.episodeCard}
                            onClick={() => handlePlay(1)}
                          >
                            <div className={styles.epThumbnail}>
                              <img src={movie.backdrop} alt={movie.title} />
                              <div className={styles.epOverlay}><Play size={16} fill="currentColor" /></div>
                              <span className={styles.epTime}>1:54:00</span>
                            </div>
                            <div className={styles.epInfo}>
                              <div className={styles.epHeader}>
                                <span className={styles.epNum}>Full Movie</span>
                                {movie.isVIP && <span className={styles.vipTag}>VIP</span>}
                              </div>
                              <p className={styles.epSummary}>{movie.description}</p>
                            </div>
                          </div>
                        ) : (movie.episodes || []).map((ep) => (
                          <div 
                            key={ep.number} 
                            className={styles.episodeCard}
                            onClick={() => handlePlay(ep.number)}
                          >
                            <div className={styles.epThumbnail}>
                              <img src={ep.thumbnail || movie.backdrop} alt={ep.title} />
                              <div className={styles.epOverlay}><Play size={16} fill="currentColor" /></div>
                              <span className={styles.epTime}>24:00</span>
                            </div>
                            <div className={styles.epInfo}>
                              <div className={styles.epHeader}>
                                <span className={styles.epNum}>{ep.number}. {ep.title}</span>
                                {ep.isVIP && <span className={styles.vipTag}>VIP</span>}
                              </div>
                              <p className={styles.epSummary}>{ep.description}</p>
                            </div>
                          </div>
                        ))}
                        {(!movie.episodes || movie.episodes.length === 0) && movie.type !== 'movie' && (
                          <div className={styles.noEpisodes}>
                            <Clock size={40} color="#e50914" />
                            <h3>Sedang Dalam Pembaruan</h3>
                            <p>Episode untuk konten ini sedang ditambahkan. Nantikan segera di AksesNonton!</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
              {activeTab === 'cast' && (
                <motion.div 
                  key="cast"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className={styles.placeholderTab}
                >
                  <p>Informasi pemeran segera hadir.</p>
                </motion.div>
              )}
              {activeTab === 'recommended' && (
                <motion.div 
                  key="recommended"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className={styles.placeholderTab}
                >
                  <p>Rekomendasi serupa untuk Anda.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Sidebar Info (Right Side on Desktop) */}
        <div className={styles.sidePanel}>
          <div className={styles.relatedBox}>
            <h3>Mungkin Anda Suka</h3>
            <div className={styles.relatedGrid}>
              {movies.filter(m => m.genre === movie.genre && m.id !== movie.id).slice(0, 4).map(m => (
                <div key={m.id} className={styles.miniCard} onClick={() => navigate(`/series/${m.id}`)}>
                  <img src={m.img} alt={m.title} />
                  <div className={styles.miniInfo}>
                    <span>{m.title}</span>
                    <p>{m.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
