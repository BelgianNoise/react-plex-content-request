import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { login, logout } from '../../features/auth/authThunks';
import styles from './Header.module.css';
import plexLogoLettersWhite from '../../assets/plex-logo-letters-white.png';

export function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  }

  return (
    <div className={styles.root}>

      <div className={styles.logoTextContainer}>

        <div className={styles.logoContainer}>

          <img src={plexLogoLettersWhite} alt="plex" className={styles.plexLogoLetters}/>

        </div>

        <span className={styles.nasaj}>NAS-AJ</span>
        <span className={styles.contentRequest}>Content Request</span>

      </div>

      <div>
        <button onClick={() => handleAuthButtonClick()}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>

    </div>
  );
}
