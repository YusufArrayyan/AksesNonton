import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Check, CreditCard, Wallet, Smartphone, ShieldCheck, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import styles from './PricingModal.module.css';

const PricingModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Quarterly');
  const [mainCategory, setMainCategory] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Dana');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState('selection'); // selection, qris, pending
  const { user, requestVerification } = useAuth();

  if (!isOpen) return null;

  const plans = {
    Monthly: { price: '19000', original: '39000', label: 'Monthly Subscription' },
    Quarterly: { price: '75000', original: '109000', label: 'Quarterly Subscription', discount: 'Rp34000 OFF', badge: 'Limited time offer' },
    Yearly: { price: '399000', original: '468000', label: 'Yearly Subscription' }
  };

  const privileges = [
    "Watch on 2 Devices", "1080P (Full HD)", "Advanced Viewing", 
    "VIP Content Download", "Skip ads", "TV, PC, Mobile, Tablet", 
    "Blockbusters", "Dolby Audio"
  ];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className={styles.modal} 
        onClick={e => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {user?.isPremium ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.successState}
            >
              <div className={styles.successIcon}><Check size={48} /></div>
              <h2>Masa Aktif VIP Aktif!</h2>
              <p>Selamat! Anda adalah member VIP AksesNonton.</p>
              <button className={styles.continueBtn} onClick={onClose}>Mulai Menonton</button>
            </motion.div>
          ) : user?.isPending || paymentStep === 'pending' ? (
            <motion.div 
              key="pending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.pendingState}
            >
              <Loader2 className={styles.spinner} size={48} color="#f39c12" />
              <h2>Menunggu Verifikasi</h2>
              <p>Pembayaran Anda sedang dalam antrean verifikasi Admin. <br/> Mohon tunggu 5-10 menit.</p>
              <button className={styles.continueBtn} onClick={onClose}>Tutup</button>
            </motion.div>
          ) : paymentStep === 'qris' ? (
            <motion.div 
              key="qris"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className={styles.qrisContainer}
            >
              <h2>Pembayaran QRIS AksesNonton</h2>
              <div className={styles.qrisImage} style={{ background: 'white', color: 'black' }}>
                <p style={{ color: '#666', marginTop: '0', textAlign: 'center' }}>Scan QR code di bawah menggunakan aplikasi pembayaran (DANA/Gopay/OVO).</p>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Pembayaran+Premium+AksesNonton+Rp39000" alt="QRIS AksesNonton" style={{ width: '250px', height: '250px', display: 'block', margin: '10px auto' }} />
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', color: '#111' }}>Total Bayar: Rp 39.000</p>
              </div>
              <div className={styles.qrisInstructions}>
                <p>Pembayaran akan diverifikasi secara manual oleh Admin.</p>
              </div>
              <button 
                className={styles.confirmBtn}
                onClick={() => {
                  requestVerification();
                  setPaymentStep('pending');
                }}
              >
                Saya Sudah Bayar
              </button>
              <button className={styles.backBtn} onClick={() => setPaymentStep('selection')}>Kembali</button>
            </motion.div>
          ) : (
            <>
              <button className={styles.closeBtn} onClick={onClose}><X /></button>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userSection}>
            <div className={styles.avatar}><Crown size={20} /></div>
            <div>
              <h3>Log in to purchase</h3>
              <p>Join VIP and enjoy a massive collection of blockbusters</p>
            </div>
          </div>
          <div className={styles.utilityBtns}>
            <button>Redeem coupon</button>
            <button>Voucher Code</button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className={styles.categoryTabs}>
          {['Standard', 'Premium', 'VIP Bundle'].map(cat => (
            <button 
              key={cat}
              className={mainCategory === cat ? styles.activeCat : ''}
              onClick={() => setMainCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.scrollableContent}>
          {/* Subscription Options */}
          <div className={styles.plansGrid}>
            {Object.entries(plans).map(([key, plan]) => (
              <div 
                key={key}
                className={`${styles.planCard} ${activeTab === key ? styles.activePlan : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
                <p className={styles.planLabel}>{plan.label}</p>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>Rp</span>
                  <span className={styles.price}>{plan.price}</span>
                </div>
                <div className={styles.oldPrice}>Rp{plan.original}</div>
                {plan.discount && <div className={styles.discountBadge}>{plan.discount}</div>}
              </div>
            ))}
          </div>

          <p className={styles.renewalNotice}>
            Subscription is renewed at Rp109000 after the discount ends. Auto renew 3 months upon expiry. Cancel anytime.
          </p>

          {/* Privileges */}
          <div className={styles.privilegesSection}>
            <div className={styles.sectionHeader}>
              <span>VIP privileges</span>
              <ChevronDown size={14} />
            </div>
            <div className={styles.privilegesGrid}>
              {privileges.map(p => (
                <div key={p} className={styles.privilegeItem}>
                  <div className={styles.pIcon}><ShieldCheck size={16} /></div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className={styles.paymentSection}>
            <h4>Select your payment method</h4>
            <div className={styles.paymentGrid}>
              {[
                { id: 'Dana', name: 'Dana (A+ Partner)', icon: <Wallet /> },
                { id: 'GoPay', name: 'GoPay', icon: <Smartphone /> },
                { id: 'Card', name: 'Credit/Debit Card', icon: <CreditCard />, sub: 'MasterCard, Visa, JCB' }
              ].map(method => (
                <div 
                  key={method.id}
                  className={`${styles.paymentCard} ${paymentMethod === method.id ? styles.activePayment : ''}`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <div className={styles.pmIcon}>{method.icon}</div>
                  <div className={styles.pmInfo}>
                    <p>{method.name}</p>
                    {method.sub && <span>{method.sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.disclaimer}>
            After clicking Join VIP, a payment page will open. Please complete your purchase in the new tab
          </div>

            <div className={styles.footerAction}>
              <div className={styles.totalPrice}>
                <span className={styles.totalCurrency}>Rp</span>
                <span className={styles.totalAmount}>{plans[activeTab].price}</span>
              </div>
              <button 
                className={styles.joinBtn} 
                disabled={isProcessing}
                onClick={() => {
                  setIsProcessing(true);
                  setTimeout(() => {
                    setIsProcessing(false);
                    setPaymentStep('qris');
                  }, 1000);
                }}
              >
                {isProcessing ? <Loader2 className={styles.spinner} /> : 'Bayar Sekarang'}
              </button>
            </div>

          <div className={styles.agreement}>
            <input type="checkbox" defaultChecked />
            <span>I agree to <a href="#">VIP Service Agreement</a></span>
          </div>
        </div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

// Internal component for Chevron
const ChevronDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

export default PricingModal;
