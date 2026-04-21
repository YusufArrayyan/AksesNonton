import React, { useState, useEffect } from 'react';
import styles from './CinemaCurtain.module.css';

const CinemaCurtain = ({ onComplete }) => {
  const [opening, setOpening] = useState(false);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start opening animation shortly after mounting
    const timer1 = setTimeout(() => {
      setOpening(true);
      // Optional: Play a curtain sound effect if available
      try {
        const audio = new Audio('/curtain-sound.mp3');
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio autoplay prevented'));
      } catch(e) {}
    }, 1500);

    // Start fading out the stage
    const timerFade = setTimeout(() => {
      setFading(true);
    }, 3800);

    // Unmount after animation finishes
    const timer2 = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timerFade);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className={`${styles.stage} ${opening ? styles.isOpening : ''} ${fading ? styles.isFading : ''}`}>
      {/* Top Valance (Tirai Gantung Atas) */}
      <div className={styles.valance}></div>
      
      {/* Left Curtain */}
      <div className={styles.curtainLeft}>
        <div className={styles.fabric}></div>
      </div>
      
      {/* Right Curtain */}
      <div className={styles.curtainRight}>
        <div className={styles.fabric}></div>
      </div>

      <div className={styles.spotlight}>
        <h1>AKSESNONTON</h1>
        <p>Pengalaman Sinematik Premium</p>
      </div>
    </div>
  );
};

export default CinemaCurtain;
