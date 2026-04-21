import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, ChevronDown, ThumbsUp, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={styles.cardWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={styles.card}
        whileHover={{
          scale: 1.4,
          y: -50,
          zIndex: 100,
          transition: { duration: 0.3 }
        }}
        onClick={() => {
          const path = movie.type === 'series' ? `/series/${movie.id}` : `/movie/${movie.id}`;
          navigate(path);
        }}
      >
        {imgError ? (
          <div className={styles.fallback}>
            <Film size={36} color="#444" />
            <span>{movie.title}</span>
          </div>
        ) : (
          <img
            src={movie.img}
            alt={movie.title}
            className={styles.thumbnail}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}

        {movie.isVIP && (
          <div className={styles.vipBadge}>
            <span>VIP</span>
          </div>
        )}

        {isHovered && (
          <motion.div
            className={styles.infoBox}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.controls}>
              <div className={styles.leftControls}>
                <button className={styles.iconBtn}><Play size={14} fill="currentColor" /></button>
                <button className={styles.iconBtn}><Plus size={14} /></button>
                <button className={styles.iconBtn}><ThumbsUp size={14} /></button>
              </div>
              <button className={styles.iconBtn}><ChevronDown size={14} /></button>
            </div>

            <div className={styles.meta}>
              <span className={styles.match}>{movie.trendScore || 98}% Cocok</span>
              <span>{movie.year}</span>
              <span className={styles.adult}>13+</span>
              <span className={styles.hd}>HD</span>
              {movie.type === 'series' && <span className={styles.seriesBadge}>Serial</span>}
              {movie.isVIP && <span className={styles.vipBadge}>VIP</span>}
            </div>

            <div className={styles.genres}>
              <span>{movie.genre}</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MovieCard;
