import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, User, Bell, Menu, ChevronDown, Crown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = ({ onSearch, query, onOpenPricing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const genres = [
    "Action", "Comedy", "Drama", "Horror", "Sci-Fi", 
    "Romance", "Thriller", "Fantasy", "Anime", 
    "Animation", "Mystery", "Family", "Adventure", "Crime"
  ];

  const countries = ["Indonesia", "Hollywood", "Japan"];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>AKSESNONTON</Link>
        
        <ul className={styles.navLinks}>
          <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Beranda</NavLink></li>
          <li><NavLink to="/tv-shows" className={({isActive}) => isActive ? styles.active : ''}>TV Series</NavLink></li>
          <li><NavLink to="/movies" className={({isActive}) => isActive ? styles.active : ''}>Film</NavLink></li>
          <li><NavLink to="/new-popular" className={({isActive}) => isActive ? styles.active : ''}>Baru & Populer</NavLink></li>
          <li><NavLink to="/my-list" className={({isActive}) => isActive ? styles.active : ''}>Daftar Saya</NavLink></li>
          
          {user && user.role === 'admin' && (
            <li><NavLink to="/admin" className={({isActive}) => isActive ? styles.active : ''}>Admin</NavLink></li>
          )}

          <li className={styles.browseContainer} 
              onMouseEnter={() => setIsBrowseOpen(true)}
              onMouseLeave={() => setIsBrowseOpen(false)}>
            <span className={styles.browseLink}>
              Jelajahi <ChevronDown size={14} />
            </span>
            {isBrowseOpen && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownSection}>
                  <h4>Genre</h4>
                  {genres.map(g => (
                    <Link key={g} to={`/genre/${g}`} onClick={() => setIsBrowseOpen(false)}>{g}</Link>
                  ))}
                </div>
                <div className={styles.dropdownSection}>
                  <h4>Asal</h4>
                  {countries.map(c => (
                    <Link key={c} to={`/country/${c}`} onClick={() => setIsBrowseOpen(false)}>{c}</Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <div className={styles.searchContainer}>
          <Search size={20} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Cari judul, genre..."
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <Bell size={22} className={styles.icon} />
        
        {user?.isPremium ? (
          <div className={styles.vipActiveBadge}>
             <Crown size={16} fill="gold" />
             <span>VIP ACTIVE</span>
          </div>
        ) : (
          <button className={styles.vipSaleBtn} onClick={onOpenPricing}>
            <div className={styles.vipBadge}>VIP SALE</div>
            <Crown size={18} fill="currentColor" />
            <span>VIP</span>
          </button>
        )}
        
        <div className={styles.authLinks}>
          {user ? (
            <button className={styles.logoutBtn} onClick={logout}>Keluar</button>
          ) : (
            <Link to="/login" className={styles.loginBtn}>Masuk</Link>
          )}
        </div>

        <Link to={user ? "/profile" : "/login"} className={styles.profileBox}>
          {user ? <span className={styles.userName}>{user.name[0].toUpperCase()}</span> : <User size={22} />}
        </Link>
        <Menu size={24} className={styles.mobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
