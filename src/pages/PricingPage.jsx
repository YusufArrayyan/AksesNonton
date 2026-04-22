import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './PricingPage.module.css';
import { Check, X, Crown } from 'lucide-react';

const PricingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { requestVerification, user, loading } = useAuth();
  const [paymentStep, setPaymentStep] = useState('selection'); // selection, qris, pending
  
  const state = location.state || {};
  const message = state.message || "Tingkatkan ke Premium untuk akses tak terbatas.";
  
  if (loading) return <div className={styles.loading}>Memuat...</div>;

  if (user?.isPremium) {
    return (
      <div className={styles.pricingContainer}>
        <button className={styles.closeBtn} onClick={() => navigate(-1)}>
          <X size={28} />
        </button>
        <div className={styles.activeVipBox}>
          <Crown size={60} color="#cca13e" />
          <h2>Langganan Anda Aktif!</h2>
          <p>Terima kasih telah menjadi bagian dari AksesNonton VIP.</p>
          <div className={styles.activeDetails}>
             <p>Paket: <strong>Premium Cinema</strong></p>
             <p>Status: <span className={styles.statusBadge}>AKTIF</span></p>
          </div>
          <button className={styles.backBtn} onClick={() => navigate(state.movie ? `/series/${state.movie.id}` : '/')}>
            Mulai Menonton Sekarang
          </button>
        </div>
      </div>
    );
  }

  if (user?.isPending || paymentStep === 'pending') {
    return (
      <div className={styles.pricingContainer}>
        <button className={styles.closeBtn} onClick={() => navigate(-1)}><X size={28} /></button>
        <div className={styles.activeVipBox} style={{ borderColor: '#f39c12' }}>
          <h2>Menunggu Verifikasi</h2>
          <p>Pembayaran Anda sedang dalam antrean verifikasi Admin. <br/> Mohon tunggu 5-10 menit.</p>
          <button className={styles.backBtn} style={{ background: '#333' }} onClick={() => navigate('/')}>Kembali ke Beranda</button>
        </div>
      </div>
    );
  }

  if (paymentStep === 'qris') {
    return (
      <div className={styles.pricingContainer}>
        <button className={styles.closeBtn} onClick={() => navigate(-1)}><X size={28} /></button>
        <div className={styles.activeVipBox} style={{ background: 'white', color: 'black' }}>
          <h2 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '0' }}>Pembayaran QRIS AksesNonton</h2>
          <p style={{ color: '#666', marginTop: '0' }}>Scan QR code di bawah menggunakan aplikasi pembayaran (DANA/Gopay/OVO).</p>
          
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Pembayaran+Premium+AksesNonton+Rp39000" alt="QRIS AksesNonton" style={{ width: '250px', height: '250px', display: 'block', margin: '20px auto' }} />
          
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total Bayar: Rp 39.000</p>
          
          <div style={{ display: 'flex', gap: '15px', width: '100%', justifyContent: 'center' }}>
            <button 
              className={styles.backBtn} 
              style={{ background: '#27ae60' }} 
              onClick={() => {
                requestVerification();
                setPaymentStep('pending');
              }}
            >
              Saya Sudah Bayar
            </button>
            <button className={styles.backBtn} style={{ background: '#ccc', color: '#333' }} onClick={() => setPaymentStep('selection')}>
              Batal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pricingContainer}>
      <button className={styles.closeBtn} onClick={() => navigate(-1)}>
        <X size={28} />
      </button>

      <div className={styles.messageBox}>
        <h2>Akses VIP Diperlukan 🌟</h2>
        <p>{message}</p>
      </div>

      <div className={styles.plansWrapper}>
        <div className={styles.planCard}>
          <h3>Basic</h3>
          <p className={styles.price}>Gratis</p>
          <ul className={styles.features}>
            <li><Check size={16} /> Akses film reguler</li>
            <li><Check size={16} /> Iklan di tengah penayangan</li>
            <li className={styles.inactive}><Check size={16} /> Film & Series Mahakarya</li>
            <li className={styles.inactive}><Check size={16} /> Audio Description Tunanetra VIP</li>
          </ul>
          <button className={styles.currentBtn} disabled>Akses Saat Ini</button>
        </div>

        <div className={`${styles.planCard} ${styles.premiumCard}`}>
          <div className={styles.badge}>Best Value</div>
          <h3>Premium Cinema</h3>
          <p className={styles.price}>Rp 39.000 <span>/ bulan</span></p>
          <ul className={styles.features}>
            <li><Check size={16} color="#cca13e" /> Akses semua film Premium & Reguler</li>
            <li><Check size={16} color="#cca13e" /> Bebas Iklan 100%</li>
            <li><Check size={16} color="#cca13e" /> Kualitas Ultra HD & Audio Lossless</li>
            <li><Check size={16} color="#cca13e" /> Fitur Audio Description Tunanetra Lengkap</li>
          </ul>
          <button className={styles.subscribeBtn} onClick={() => {
             if(!user) {
                 navigate('/login', { state: { message: "Harap login sebelum membeli paket VIP." }});
             } else {
                 setPaymentStep('qris');
             }
          }}>Berlangganan Sekarang</button>
        </div>
      </div>

      <div className={styles.howToBox}>
        <h4>Cara Berlangganan:</h4>
        <ol>
          <li>Pilih paket <strong>Premium Cinema</strong> di atas.</li>
          <li>Scan QRIS yang muncul menggunakan aplikasi pembayaran (DANA, OVO, dll).</li>
          <li>Klik tombol <strong>"Saya Sudah Bayar"</strong> setelah transaksi selesai.</li>
          <li>Data Anda akan masuk ke antrean <strong>Verifikasi Admin</strong>.</li>
          <li>Tunggu 5-10 menit hingga status berubah menjadi <strong>VIP ACTIVE</strong>.</li>
        </ol>
      </div>
    </div>
  );
};

export default PricingPage;
