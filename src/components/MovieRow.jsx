import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import styles from './MovieRow.module.css';

const MovieRow = ({ title, movies, onOpenModal, isPage }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth + 100 
        : scrollLeft + clientWidth - 100;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (isPage) {
    return (
      <div className={styles.rowPage}>
        <h2 className={styles.rowTitle}>{title}</h2>
        <div className={styles.grid}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <h2 className={styles.rowTitle}>{title}</h2>
      
      <div className={styles.container}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={() => scroll('left')}>
          <ChevronLeft size={40} />
        </button>
        
        <div className={styles.slider} ref={rowRef}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onOpenModal={onOpenModal} />
          ))}
        </div>
        
        <button className={`${styles.arrow} ${styles.right}`} onClick={() => scroll('right')}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
