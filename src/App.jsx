import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import CinemaCurtain from './components/CinemaCurtain';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import Register from './pages/Register';
import WatchPage from './pages/WatchPage';
import PricingPage from './pages/PricingPage';
import AdminDashboard from './pages/AdminDashboard';
import InfoPage from './pages/InfoPage';
import ProfilePage from './pages/ProfilePage';
import PricingModal from './components/PricingModal';
import { AuthProvider, useAuth } from './context/AuthContext';
import { movies } from './data/movies';
import './styles/index.css';

// Wrapper to handle protected routes and layout
const AppContent = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [myList, setMyList] = useState([]);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  
  // Curtain Intro state - play on every fresh load
  const [showIntro, setShowIntro] = useState(true);

  const location = useLocation();
  const { user, loading } = useAuth();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isWatchPage = location.pathname.startsWith('/watch');

  // Load My List from localStorage
  useEffect(() => {
    const listKey = user ? `aksesnonton_mylist_${user.email}` : 'aksesnonton_mylist_guest';
    const saved = localStorage.getItem(listKey);
    if (saved) setMyList(JSON.parse(saved));
    else setMyList([]);
  }, [user]);

  // Sync My List to localStorage
  useEffect(() => {
    if (user || myList.length > 0) {
      const listKey = user ? `aksesnonton_mylist_${user.email}` : 'aksesnonton_mylist_guest';
      localStorage.setItem(listKey, JSON.stringify(myList));
    }
  }, [myList, user]);

  // Close search when navigating away
  useEffect(() => {
    setSearchQuery('');
  }, [location]);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMyList = (movie) => {
    if (myList.find(m => m.id === movie.id)) {
      setMyList(myList.filter(m => m.id !== movie.id));
    } else {
      setMyList([...myList, movie]);
    }
  };

  const filteredMovies = useMemo(() => {
    if (!searchQuery) return [];
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const homeCategories = useMemo(() => {
    const popular = movies.filter(m => m.category === 'Popular');
    const trending = movies.filter(m => m.category === 'Trending');
    const topRated = movies.filter(m => m.category === 'Top Rated');
    const series = movies.filter(m => m.category === 'Series');
    const anime = movies.filter(m => m.genre === 'Anime');
    const indonesian = movies.filter(m => m.country === 'Indonesia');
    const action = movies.filter(m => m.genre === 'Action');
    const horror = movies.filter(m => m.genre === 'Horror');
    const drama = movies.filter(m => m.genre === 'Drama');
    const scifi = movies.filter(m => m.genre === 'Sci-Fi');

    return { popular, trending, topRated, series, anime, indonesian, action, horror, drama, scifi };
  }, []);

  const heroMovie = useMemo(() => {
    const pool = homeCategories.popular.length > 0 ? homeCategories.popular : movies;
    return pool[Math.floor(Math.random() * pool.length)];
  }, [homeCategories.popular]);

  if (loading) return null;

  return (
    <div className="app">
      {showIntro && (
        <CinemaCurtain onComplete={() => setShowIntro(false)} />
      )}

      {(!isAuthPage && !isWatchPage) && (
        <Navbar 
          onSearch={setSearchQuery} 
          query={searchQuery} 
          onOpenPricing={() => setIsPricingModalOpen(true)}
        />
      )}

      {searchQuery !== '' && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#050507', zIndex: 100, paddingTop: '100px', overflowY: 'auto' }}>
          <button 
            onClick={() => setSearchQuery('')} 
            style={{ position: 'absolute', top: '100px', right: '6%', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '50px', cursor: 'pointer' }}
          >
            Tutup Pencarian
          </button>
          <MovieRow 
            title={`Hasil pencarian untuk "${searchQuery}"`} 
            movies={filteredMovies} 
            onOpenModal={handleOpenModal} 
            isPage
          />
        </div>
      )}

      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        <Route path="/" element={
          <>
            <Hero movie={heroMovie} onOpenPricing={() => setIsPricingModalOpen(true)} />
            <div style={{ marginTop: '-40px', position: 'relative', zIndex: 10, paddingBottom: '100px' }}>
              <MovieRow title="Populer di AksesNonton" movies={homeCategories.popular} />
              <MovieRow title="Sedang Tren" movies={homeCategories.trending} />
              <MovieRow title="Mahakarya Film" movies={homeCategories.topRated} />
              <MovieRow title="Film Action Terbaik" movies={homeCategories.action} />
              <MovieRow title="Bioskop Indonesia" movies={homeCategories.indonesian} />
              <MovieRow title="Anime Pilihan" movies={homeCategories.anime} />
              <MovieRow title="Serial TV Terpopuler" movies={homeCategories.series} />
              <MovieRow title="Film Horor Terbaik" movies={homeCategories.horror} />
              <MovieRow title="Drama Berkualitas" movies={homeCategories.drama} />
              <MovieRow title="Fiksi Ilmiah" movies={homeCategories.scifi} />
            </div>
          </>
        } />

        <Route path="/tv-shows" element={<CategoryPage type="tv-shows" />} />
        <Route path="/movies" element={<CategoryPage type="movies" />} />
        <Route path="/new-popular" element={<CategoryPage type="new" />} />
        
        <Route path="/my-list" element={
          <div style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <MovieRow 
              title="Daftar Tontonan Saya" 
              movies={myList} 
              isPage
            />
            {myList.length === 0 && (
              <div style={{ textAlign: 'center', padding: '100px', color: '#666' }}>
                <h2>Daftar Anda kosong</h2>
                <p>Tambahkan film yang ingin Anda tonton nanti!</p>
              </div>
            )}
          </div>
        } />

        <Route path="/genre/:id" element={<CategoryPage type="genre" />} />
        <Route path="/country/:id" element={<CategoryPage type="country" />} />
        
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/series/:id" element={<InfoPage onOpenPricing={() => setIsPricingModalOpen(true)} />} />
        <Route path="/movie/:id" element={<InfoPage onOpenPricing={() => setIsPricingModalOpen(true)} />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onToggleList={toggleMyList}
        isInList={selectedMovie ? myList.some(m => m.id === selectedMovie.id) : false}
      />

      <PricingModal 
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
      />

      {!isAuthPage && (
        <footer style={{ padding: '50px 4%', color: '#6d6d6e', fontSize: '0.9rem', borderTop: '1px solid #1a1a1a', background: '#050507' }}>
          <p>© 2024 AksesNonton. Pengalaman Streaming Inklusif untuk Semua.</p>
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
