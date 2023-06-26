
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { ReactComponent as HomeSVG } from '../../assets/home.svg';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import { ReactComponent as SubmitRequestSVG } from '../../assets/submit-request.svg';
import { ReactComponent as MyRequestsSVG } from '../../assets/my-requests.svg';
import plexArrow from '../../assets/plex-arrow.png';
import github from '../../assets/github.png';
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
            <MyRequestsSVG />
            <p>{t('components.nav.my-requests')}</p>
          </div>
        </NavLink>

        <NavLink
          to="/submit-request"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <SubmitRequestSVG />
            <p>{t('components.nav.submit-request')}</p>
          </div>
        </NavLink>

      </div>

      <div className={styles.goToContainer}>

        <a href="https://github.com/BelgianNoise/react-plex-content-request" target='_blank' rel="noreferrer" className={styles.goto}>
          <p>{t('components.nav.go-to-github')}</p>
          <img src={github} alt="github logo"/>
        </a>

        <a href="https://app.plex.tv/" className={styles.goto}>
          <p>{t('components.nav.go-to-plex')}</p>
          <img src={plexArrow} alt="plex-arrow"/>
        </a>

      </div>

    </div>
  );
}
