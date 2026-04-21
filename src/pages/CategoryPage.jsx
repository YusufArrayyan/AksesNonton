import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MovieRow from '../components/MovieRow';
import Hero from '../components/Hero';
import { movies } from '../data/movies';

const CategoryPage = ({ onOpenModal, type }) => {
  const { id } = useParams();
  const location = useLocation();

  const title = useMemo(() => {
    if (type === 'genre') return `Koleksi ${id}`;
    if (type === 'tv-shows') return 'Serial TV Pilihan';
    if (type === 'movies') return 'Film Terpopuler';
    if (type === 'new') return 'Baru & Populer';
    return id || 'Jelajahi';
  }, [id, type]);

  const filteredMovies = useMemo(() => {
    let list = [...movies];
    if (type === 'genre') {
      list = list.filter(m => m.genre.toLowerCase() === id.toLowerCase());
    } else if (type === 'tv-shows') {
      list = list.filter(m => m.type === 'series');
    } else if (type === 'movies') {
      list = list.filter(m => m.type === 'movie');
    } else if (type === 'new') {
      list = list.filter(m => m.year >= 2024);
    } else if (type === 'country') {
      list = list.filter(m => m.country.toLowerCase() === id.toLowerCase());
    }
    return list;
  }, [id, type]);

  const heroMovie = useMemo(() => {
    return filteredMovies.length > 0 
      ? filteredMovies[Math.floor(Math.random() * filteredMovies.length)] 
      : movies[0];
  }, [filteredMovies]);

  return (
    <div>
      <Hero movie={heroMovie} onOpenModal={onOpenModal} />
      <div style={{ marginTop: '-100px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
        <MovieRow 
          title={title} 
          movies={filteredMovies} 
          onOpenModal={onOpenModal} 
          isPage
        />
        
        {/* Additional suggested rows for better experience */}
        {type !== 'genre' && (
          <MovieRow 
            title="Rekomendasi AksesNonton" 
            movies={[...movies].sort(() => 0.5 - Math.random()).slice(0, 10)} 
            onOpenModal={onOpenModal} 
          />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
