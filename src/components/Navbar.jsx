import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, User, Bell, Menu, ChevronDown, Crown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = ({ onSearch, query, onOpenPricing }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const genres = [
    "Action", "Comedy", "Drama", "Horror", "Sci-Fi", 
    "Romance", "Thriller", "Fantasy", "Anime", 
    "Animation", "Mystery", "Family", "Adventure", "Crime"
  ];

  const countries = ["Indonesia", "Hollywood", "Japan"];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>AKSESNONTON</Link>
          
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
              <AnimatePresence>
                {isBrowseOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={styles.dropdown}
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.searchContainer}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Cari judul..."
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
          <Menu size={28} className={styles.mobileMenu} onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.drawerOverlay}
              onClick={toggleMenu}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={styles.drawer}
            >
              <div className={styles.drawerHeader}>
                <span className={styles.logo}>MENU</span>
                <X size={28} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
              </div>

              <div className={styles.drawerContent}>
                <div className={styles.drawerSearch}>
                   <Search size={18} />
                   <input 
                     type="text" 
                     placeholder="Cari film, genre..." 
                     value={query}
                     onChange={(e) => onSearch(e.target.value)}
                   />
                </div>

                <div className={styles.drawerSection}>
                  <Link to="/" onClick={toggleMenu}>Beranda</Link>
                  <NavLink to="/tv-shows" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>TV Series</NavLink>
                  <NavLink to="/movies" onClick={toggleMenu} className={({isActive}) => isActive ? styles.active : ''}>Film</NavLink>
                  <Link to="/my-list" onClick={toggleMenu}>Daftar Saya</Link>
                </div>

                <div className={styles.drawerSection}>
                  <h4>Genre Utama</h4>
                  <div className={styles.tagCloud}>
                    {genres.slice(0, 8).map(g => (
                      <Link key={g} to={`/genre/${g}`} onClick={toggleMenu}>{g}</Link>
                    ))}
                  </div>
                </div>

                <div className={styles.drawerSection}>
                  <h4>Asal Konten</h4>
                  {countries.map(c => (
                    <Link key={c} to={`/country/${c}`} onClick={toggleMenu}>{c}</Link>
                  ))}
                </div>

                <div className={styles.drawerFooter}>
                  {user ? (
                    <div className={styles.userBrief}>
                      <div className={styles.userMainInfo}>
                        <span>{user.email}</span>
                        {user.isPending && <span className={styles.pendingBadge}>MENUNGGU VERIFIKASI VIP</span>}
                        {user.isPremium && <span className={styles.vipBadge}>VIP ACTIVE</span>}
                      </div>
                      <button onClick={() => { logout(); toggleMenu(); }}>Keluar</button>
                    </div>
                  ) : (
                    <Link to="/login" className={styles.mobileLoginBtn} onClick={toggleMenu}>Masuk Ke Platform</Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
