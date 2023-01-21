import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { login, logout } from '../../features/auth/authThunks';
import styles from './Header.module.css';
import plexLogoLettersWhite from '../../assets/plex-logo-letters-white.png';
import { LanguageSelector } from '../language-selector/LanguageSelector';

export function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  }

  return (
    <div className={styles.root}>

      <div className={styles.sectionLeft}>

        <div className={styles.logoContainer}>

          <img src={plexLogoLettersWhite} alt="plex" className={styles.plexLogoLetters}/>

        </div>

        <span className={styles.nasaj}>NAS-AJ</span>
        <span className={styles.contentRequest}>Content Request</span>

      </div>

      <div className={styles.sectionRight}>

        <LanguageSelector />

        <button onClick={() => handleAuthButtonClick()}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>

      </div>

    </div>
  );
}
