import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft } from 'lucide-react';
import styles from './Auth.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    }
  };

  return (
    <div className={styles.authPage}>
      <Link to="/" className={styles.backHome}>
        <ArrowLeft size={20} /> Kembali
      </Link>
      <div className={styles.authContainer}>
        <h1 className={styles.logo}>AKSESNONTON</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Masuk</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="email@example.com"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Kata Sandi</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className={styles.submitBtn}>Masuk</button>
        </form>

        <div className={styles.divider}>
          <span>Atau</span>
        </div>

        <div className={styles.extraLinks}>
          <Link to="/register">Belum punya akun? Daftar sekarang</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
