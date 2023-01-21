import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { logout } from '../../features/auth/authThunks';
import styles from './Header.module.css';
import plexLogoLettersWhite from '../../assets/plex-logo-letters-white.png';
import { LanguageSelector } from '../language-selector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { showAuthWindow } from '../../features/auth/authSlice';

export function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(showAuthWindow());
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

        <button className='primary' onClick={() => handleAuthButtonClick()}>
          {t(`components.header.${isLoggedIn ? 'sign-out' : 'sign-in'}`)}
        </button>

      </div>

    </div>
  );
}
