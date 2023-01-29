
import { useAppSelector } from '../../app/hooks';
import styles from './Home.module.css';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import { ReactComponent as MyRequestsSVG } from '../../assets/my-requests.svg';
import { ReactComponent as SubmitRequestSVG } from '../../assets/submit-request.svg';
import { NavLink } from 'react-router-dom';

export function Home() {
  const requests = useAppSelector((state) => state.data.requests);
  const requestsFulfilled = requests.filter((r) => r.status === 'fulfilled').length;
  const latestRequest = requests[0];

  return (
    <div className={styles.root}>

      <h1>
        {requestsFulfilled} requests have been fulfilled so far!
      </h1>

      <div>
        {latestRequest?.id} {latestRequest?.date} {latestRequest?.text}
      </div>

      <div className={styles.cardContainer}>
        <NavLink to='/overview'>
          <div className={styles.card}>
            <OverviewSVG />
            <div className={styles.textContainer}>
              <p>
                Get an overview of all content requests made by you and other people.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/my-requests'>
          <div className={styles.card}>
            <MyRequestsSVG />
            <div className={styles.textContainer}>
              <p>
                Want to see the status of your content requests or want to delete them? View a list of all your personal content requests.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/submit-request'>
          <div className={styles.card}>
            <SubmitRequestSVG />
            <div className={styles.textContainer}>
              <p>
                Can't find what you are looking for on Plex? Submit a new content request.
              </p>
            </div>
          </div>
        </NavLink>
      </div>

    </div>
  );
}
