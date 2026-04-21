import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const { user, adminApproveUser, adminRejectUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('catalog'); // catalog, payments

  // Route guarding
  if (!user || user.role !== 'admin') {
    return (
      <div className={styles.denied}>
        <h2>Akses Ditolak</h2>
        <p>Hanya Admin yang dapat mengakses halaman ini.</p>
        <button onClick={() => navigate('/')}>Kembali ke Beranda</button>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: '',
    country: '',
    description: '',
    visualDescription: '',
    img: '',
    backdrop: '',
    trailerId: '',
    type: 'movie',
    category: 'Trending',
    rating: 8.0,
    trendScore: 80
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const saved = JSON.parse(localStorage.getItem('aksesnonton_custom_movies') || '[]');
      
      const newMovie = {
        ...formData,
        id: Date.now(), // Unique ID
        year: parseInt(formData.year) || 2024,
        rating: parseFloat(formData.rating),
        trendScore: parseInt(formData.trendScore)
      };

      saved.push(newMovie);
      localStorage.setItem('aksesnonton_custom_movies', JSON.stringify(saved));
      setMessage(`Berhasil menambahkan film: ${newMovie.title}! (Refresh halaman untuk melihatnya di beranda)`);
      
      // Reset form briefly
      setFormData({ ...formData, title: '', img: '', description: '', visualDescription: '', trailerId: '', backdrop: '' });
      
      setTimeout(() => setMessage(''), 5000);
    } catch(err) {
      setMessage('Terjadi kesalahan saat menyimpan Film.');
    }
  };

  return (
    <div className={styles.adminContainer}>
      <div className={styles.header}>
        <h1>Dashboard Admin</h1>
        <div className={styles.tabMenu}>
          <button 
            className={activeTab === 'catalog' ? styles.activeTab : ''} 
            onClick={() => setActiveTab('catalog')}
          >
            Tambah Katalog
          </button>
          <button 
            className={activeTab === 'payments' ? styles.activeTab : ''} 
            onClick={() => setActiveTab('payments')}
          >
            Verifikasi Pembayaran
          </button>
        </div>
      </div>

      {activeTab === 'catalog' ? (
        <div className={styles.formContainer}>
        <h2>Tambah Film Baru</h2>
        {message && <div className={styles.alert}>{message}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Judul Film / Series</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label>Tahun Rilis</label>
              <input type="number" name="year" value={formData.year} onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Genre</label>
              <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Action, Horror, Drama..." required />
            </div>
            <div className={styles.formGroup}>
              <label>Negara Asal</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Hollywood, Indonesia, Japan..." required />
            </div>
          </div>

          <div className={styles.formRow}>
             <div className={styles.formGroup}>
              <label>Kategori (Baris Tampilan)</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Popular">Popular</option>
                <option value="Trending">Trending</option>
                <option value="Top Rated">Top Rated</option>
                <option value="Series">Series</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Rating (0-10)</label>
              <input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Tautan URL Poster (Portrait)</label>
            <input type="url" name="img" value={formData.img} onChange={handleChange} placeholder="https://..." required />
          </div>

          <div className={styles.formGroup}>
            <label>Tautan URL Backdrop (Landscape) - <span style={{fontSize:'0.8em', color:'#aaa'}}>Untuk Banner HD</span></label>
            <input type="url" name="backdrop" value={formData.backdrop} onChange={handleChange} placeholder="https://..." />
          </div>
          
          <div className={styles.formGroup}>
            <label>ID Youtube Trailer</label>
            <input type="text" name="trailerId" value={formData.trailerId} onChange={handleChange} placeholder="Misal: dQw4w9WgXcQ" required />
          </div>

          <div className={styles.formGroup}>
            <label>Sinopsis Lengkap</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="3" required></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Audio Description (Narasi Visual untuk Tunanetra)</label>
            <textarea name="visualDescription" value={formData.visualDescription} onChange={handleChange} rows="2" placeholder="Jelaskan detail visual adegan penting..."></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Simpan ke Database
          </button>
        </form>
        </div>
      ) : (
        <div className={styles.paymentsContainer}>
          <h2>Daftar Tunggu Verifikasi</h2>
          <div className={styles.paymentsList}>
            {JSON.parse(localStorage.getItem('aksesnonton_pending_payments') || '[]').length === 0 ? (
              <p className={styles.emptyMsg}>Tidak ada pembayaran tertunda saat ini.</p>
            ) : (
              JSON.parse(localStorage.getItem('aksesnonton_pending_payments') || '[]').map((p) => (
                <div key={p.email} className={styles.paymentItem}>
                  <div className={styles.pUser}>
                    <p className={styles.pEmail}>{p.email}</p>
                    <p className={styles.pDate}>{new Date(p.date).toLocaleString('id-ID')}</p>
                  </div>
                  <div className={styles.pActions}>
                    <button 
                      className={styles.approveBtn} 
                      onClick={() => adminApproveUser(p.email)}
                    >
                      Setujui (Approve)
                    </button>
                    <button 
                      className={styles.rejectBtn}
                      onClick={() => adminRejectUser(p.email)}
                    >
                      Tolak
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
