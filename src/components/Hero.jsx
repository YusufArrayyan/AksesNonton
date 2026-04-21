import React, { useState } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = ({ movie, onOpenModal }) => {
  const [muted, setMuted] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [backdropError, setBackdropError] = useState(false);
  const navigate = useNavigate();

  // Reset errors when movie changes
  React.useEffect(() => {
    setImgError(false);
    setBackdropError(false);
  }, [movie]);

  if (!movie) return null;

  const getHeroImage = () => {
    if (!backdropError && movie.backdrop && movie.backdrop.trim() !== '') return movie.backdrop;
    if (!imgError && movie.img && movie.img.trim() !== '') return movie.img;
    // Ultimate fallback if both are broken
    return "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920&auto=format&fit=crop";
  };

  const heroImage = getHeroImage();

  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <motion.img
          key={heroImage}
          src={heroImage}
          alt={movie.title}
          className={styles.bgImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          onError={() => {
            if (!backdropError && movie.backdrop) {
              setBackdropError(true);
            } else {
              setImgError(true);
            }
          }}
        />
        {/* Multi-layer cinematic overlays */}
        <div className={styles.overlayLeft} />
        <div className={styles.overlayBottom} />
        <div className={styles.overlayTop} />
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {/* Metadata badges */}
        <motion.div
          className={styles.badges}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.meta}>
            <span className={styles.match}>{movie.trendScore || 98}% Cocok</span>
            <span className={styles.year}>{movie.year}</span>
            <span className={styles.adult}>13+</span>
            {movie.isVIP && <span className={styles.vipBadge}>VIP</span>}
          </div>
          <span className={`${styles.badge} ${styles.ratingBadge}`}>★ {movie.rating}</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {movie.title}
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {movie.description}
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button 
            className={styles.playButton} 
            onClick={() => {
              navigate(`/watch/${movie.id}`);
            }}
          >
            <Play size={22} fill="currentColor" />
            <span>Putar</span>
          </button>

          <button 
            className={styles.infoButton} 
            onClick={() => {
              const path = movie.type === 'series' ? `/series/${movie.id}` : `/movie/${movie.id}`;
              navigate(path);
            }}
          >
            <Info size={22} />
            <span>Informasi</span>
          </button>

          <button
            className={styles.muteButton}
            onClick={() => setMuted(!muted)}
            aria-label={muted ? "Aktifkan suara" : "Bisukan"}
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>
      </motion.div>

      {/* Trending label */}
      {movie.trendScore >= 95 && (
        <motion.div
          className={styles.trendLabel}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          🔥 Trending #{Math.floor(Math.random() * 5) + 1} Hari Ini
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
