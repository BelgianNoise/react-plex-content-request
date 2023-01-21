
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { ReactComponent as HomeSVG } from '../../assets/home.svg';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import plexArrow from '../../assets/plex-arrow.png';
import { useTranslation } from 'react-i18next';

export function Nav() {

  const { t } = useTranslation();

  return (
    <div className={styles.root}>

      <div className={styles.routesContainer}>

        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <HomeSVG />
            <p>{t('components.nav.home')}</p>
          </div>
        </NavLink>

        <NavLink
          to="/overview"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <OverviewSVG />
            <p>{t('components.nav.overview')}</p>
          </div>
        </NavLink>

        <NavLink
          to="/my-requests"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <HomeSVG />
            <p>{t('components.nav.my-requests')}</p>
          </div>
        </NavLink>

        <NavLink
          to="/submit-request"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <HomeSVG />
            <p>{t('components.nav.submit-request')}</p>
          </div>
        </NavLink>

      </div>

      <a href="https://app.plex.tv/" className={styles.goToPlex}>
        <p>{t('components.nav.go-to-plex')}</p>
        <img src={plexArrow} alt="plex-arrow"/>
      </a>

    </div>
  );
}
