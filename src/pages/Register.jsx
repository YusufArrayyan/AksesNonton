import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Auth.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate('/login');
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authContainer}>
        <h1 className={styles.logo}>AKSESNONTON</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Daftar Akun Baru</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nama Lengkap</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              placeholder="Nama Anda"
            />
          </div>
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
              placeholder="Buat kata sandi"
            />
          </div>
          <button type="submit" className={styles.submitBtn}>Daftar</button>
        </form>

        <div className={styles.divider}>
          <span>Atau</span>
        </div>

        <div className={styles.extraLinks}>
          <Link to="/login">Sudah punya akun? Masuk</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
