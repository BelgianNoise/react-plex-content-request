
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { ReactComponent as HomeSVG } from '../../assets/home.svg';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import plexArrow from '../../assets/plex-arrow.png';

export function Nav() {
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
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink
          to="/overview"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <OverviewSVG />
            <p>Overview</p>
          </div>
        </NavLink>

        <NavLink
          to="/my-requests"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <HomeSVG />
            <p>My Requests</p>
          </div>
        </NavLink>

        <NavLink
          to="/submit-request"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          <div className={styles.navItem}>
            <div className={styles.borderLeft}></div>
            <HomeSVG />
            <p>Submit Request</p>
          </div>
        </NavLink>

      </div>

      <a href="https://app.plex.tv/" className={styles.goToPlex}>
        <p>Go to app.plex.tv</p>
        <img src={plexArrow} alt="plex-arrow"/>
      </a>

    </div>
  );
}
