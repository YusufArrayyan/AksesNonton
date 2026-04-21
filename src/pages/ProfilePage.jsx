import React from 'react';
import { useAuth } from '../context/AuthContext';
import { movies } from '../data/movies';
import MovieRow from '../components/MovieRow';
import styles from './ProfilePage.module.css';
import { User, Mail, Shield, Crown, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    // Fetch "Daftar Saya" from localStorage for the specific user
    let mySubscribedList = [];
    if (user) {
        const listKey = `aksesnonton_mylist_${user.email}`;
        const saved = localStorage.getItem(listKey);
        if (saved) {
            mySubscribedList = JSON.parse(saved);
        }
    }
    React.useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loader}></div>
                <p>Memuat Profil...</p>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <div className={styles.userSection}>
                    <div className={styles.avatarLarge}>
                        {user.name && user.name[0].toUpperCase()}
                    </div>
                    <div className={styles.userInfoSide}>
                        <h1>{user.name}</h1>
                        <span className={user.isPremium ? styles.vipStatus : styles.basicStatus}>
                            {user.isPremium ? <Crown size={14} fill="currentColor" /> : <Shield size={14} />}
                            {user.isPremium ? 'VIP MEMBER' : 'BASIC MEMBER'}
                        </span>
                    </div>
                </div>
                
                <button className={styles.logoutBtn} onClick={() => { logout(); navigate('/'); }}>
                    <LogOut size={20} />
                    <span>Keluar</span>
                </button>
            </div>

            <div className={styles.profileLayout}>
                <div className={styles.accountCard}>
                    <h3>Detail Akun</h3>
                    <div className={styles.detailRow}>
                        <Mail size={18} />
                        <div>
                            <label>Email</label>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className={styles.detailRow}>
                        <Shield size={18} />
                        <div>
                            <label>Role</label>
                            <p>{user.role === 'admin' ? 'Administrator' : 'User'}</p>
                        </div>
                    </div>
                    
                    {!user.isPremium && (
                         <div className={styles.upgradePrompt} onClick={() => navigate('/pricing')}>
                            <div className={styles.upgradeText}>
                                <h4>Tingkatkan ke VIP</h4>
                                <p>Buka 100+ konten eksklusif & Tanpa Iklan</p>
                            </div>
                            <ChevronRight size={24} />
                         </div>
                    )}
                </div>

                <div className={styles.membershipCard}>
                    <h3>Membership Saya</h3>
                    <div className={styles.tierBox}>
                         <div className={user.isPremium ? styles.tierActive : styles.tierInactive}>
                            <div className={styles.tierHeader}>
                                <Crown size={20} />
                                <span>Premium Cinema</span>
                            </div>
                            <p>Status: {user.isPremium ? 'Aktif' : 'Tidak Aktif'}</p>
                            {user.isPremium && <p className={styles.expiry}>Berlaku hingga: 21 Mei 2024</p>}
                         </div>
                    </div>
                </div>
            </div>

            <div className={styles.profileWatchlist}>
                 <MovieRow 
                    title="Lanjutkan Menonton" 
                    movies={mySubscribedList} 
                    onOpenModal={() => {}}
                 />
            </div>
        </div>
    );
};

export default ProfilePage;
