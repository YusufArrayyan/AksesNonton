import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X, Play, Plus, ThumbsUp, Volume2, VolumeX, Check, MessageSquare, Headphones, Languages } from 'lucide-react';
import styles from './MovieModal.module.css';

const MovieModal = ({ movie, isOpen, onClose, onToggleList, isInList }) => {
  const [activeTab, setActiveTab] = useState('info'); // 'info' or 'discussion'
  const [isADEnabled, setIsADEnabled] = useState(false);
  const [isSDHEnabled, setIsSDHEnabled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();

  if (!movie) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="movie-title"
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup modal">
              <X size={24} />
            </button>

            <div 
              className={styles.videoSection}
              onClick={() => {
                onClose();
                navigate(`/watch/${movie.id}`);
              }}
              style={{ cursor: 'pointer' }}
              title="Klik untuk menonton film penuh"
            >
              {movie.trailerId ? (
                <iframe
                  className={styles.video}
                  src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0&loop=1&playlist=${movie.trailerId}&vq=hd1080`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div 
                  className={styles.video} 
                  style={{ 
                    backgroundImage: `url(${movie.backdrop || movie.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                ></div>
              )}
              <div className={styles.videoOverlay}>
                <button 
                  className={styles.muteOverlayBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  aria-label={isMuted ? "Aktifkan suara" : "Matikan suara"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                <div className={styles.videoContent}>
                  <h2 id="movie-title" className={styles.title}>{movie.title}</h2>
                  <div className={styles.videoButtons}>
                    <button 
                      className={styles.playBtn} 
                      onClick={() => {
                        onClose();
                        navigate(`/watch/${movie.id}`);
                      }}
                    >
                      <Play fill="currentColor" /> Putar Film
                    </button>
                    <button 
                      className={`${styles.circleBtn} ${isInList ? styles.activeBtn : ''}`}
                      onClick={() => onToggleList(movie)}
                      aria-label={isInList ? "Hapus dari daftar" : "Tambah ke daftar"}
                    >
                      {isInList ? <Check size={20} /> : <Plus size={20} />}
                    </button>
                    <button 
                      className={`${styles.circleBtn} ${isADEnabled ? styles.activeBtn : ''}`}
                      onClick={() => setIsADEnabled(!isADEnabled)}
                      title="Audio Deskripsi (AD)"
                      aria-label="Aktifkan Audio Deskripsi"
                    >
                      <Headphones size={20} />
                    </button>
                    <button 
                      className={`${styles.circleBtn} ${isSDHEnabled ? styles.activeBtn : ''}`}
                      onClick={() => setIsSDHEnabled(!isSDHEnabled)}
                      title="Subtitle Deskriptif (SDH)"
                      aria-label="Aktifkan Subtitle Deskriptif"
                    >
                      <Languages size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.tabsMenu}>
              <button 
                className={activeTab === 'info' ? styles.activeTab : ''} 
                onClick={() => setActiveTab('info')}
              >
                Informasi
              </button>
              {movie.type === 'series' && (
                <button 
                  className={activeTab === 'episodes' ? styles.activeTab : ''} 
                  onClick={() => setActiveTab('episodes')}
                >
                  Episode
                </button>
              )}
              <button 
                className={activeTab === 'discussion' ? styles.activeTab : ''} 
                onClick={() => setActiveTab('discussion')}
              >
                Diskusi Komunitas
              </button>
            </div>

            <div className={styles.details}>
              {activeTab === 'info' && (
                <>
                  <div className={styles.mainInfo}>
                    {isADEnabled && (
                      <motion.div 
                        className={styles.adNarrative}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <strong>Audio Deskripsi:</strong> {movie.visualDescription || "Deskripsi visual untuk film ini segera hadir."}
                      </motion.div>
                    )}
                    <div className={styles.meta}>
                      <span className={styles.match}>{movie.trendScore || 98}% Cocok</span>
                      <span>{movie.year}</span>
                      <span className={styles.adult}>13+</span>
                      <span className={styles.hd}>HD</span>
                      {movie.type === 'series' && <span className={styles.seriesBadge}>Serial</span>}
                    </div>
                    <p className={styles.description}>{movie.description}</p>
                  </div>

                  <div className={styles.sideInfo}>
                    <p><span>Asal:</span> {movie.country || 'Hollywood'}</p>
                    <p><span>Genre:</span> {movie.genre}</p>
                    <p><span>Sutradara:</span> {movie.director}</p>
                  </div>
                </>
              )}

              {activeTab === 'episodes' && (
                <div className={styles.episodesTab}>
                  <h3>Musim 1</h3>
                  <div className={styles.episodesGrid}>
                    {(movie.episodes || [
                      { number: 1, title: "Episode Pertama", ytId: movie.trailerId },
                      { number: 2, title: "Episode Kedua", ytId: movie.trailerId },
                      { number: 3, title: "Episode Ketiga", ytId: movie.trailerId }
                    ]).map(ep => (
                      <div 
                        key={ep.number} 
                        className={styles.episodeCard}
                        onClick={() => {
                          onClose();
                          navigate(`/watch/${movie.id}?ep=${ep.number}`);
                        }}
                      >
                        <div className={styles.epThumbnail}>
                          <img src={movie.backdrop || movie.img} alt={ep.title} />
                          <div className={styles.epPlayOverlay}><Play size={20} fill="currentColor" /></div>
                          <span className={styles.epDuration}>24m</span>
                        </div>
                        <div className={styles.epMeta}>
                          <span className={styles.epNumTitle}>{ep.number}. {ep.title}</span>
                          <p className={styles.epDesc}>Deskripsi singkat episode ini menampilkan petualangan seru yang tidak boleh dilewatkan.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'discussion' && (
                <div className={styles.discussionArea}>
                  <div className={styles.discussionHeader}>
                    <MessageSquare size={20} />
                    <h3>Obrolan Aksesisbilitas</h3>
                  </div>
                  <p className={styles.discussionMuted}>Bergabunglah dengan komunitas untuk mendiskusikan detail visual film ini.</p>
                  <div className={styles.commentList}>
                    <div className={styles.comment}>
                      <strong>Budi (Tunanetra):</strong> "Deskripsi audio di menit 0:45 sangat membantu saya membayangkan ekspresi Paul."
                    </div>
                    <div className={styles.comment}>
                      <strong>Siti:</strong> "Iya Budi, setuju! Detail visual gurunnya memang sangat megah menurut AD-nya."
                    </div>
                  </div>
                  <div className={styles.commentInputBox}>
                    <input type="text" placeholder="Tulis komentar..." disabled />
                    <button disabled>Kirim</button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
