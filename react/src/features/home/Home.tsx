
import { useAppSelector } from '../../app/hooks';
import styles from './Home.module.css';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import { ReactComponent as MyRequestsSVG } from '../../assets/my-requests.svg';
import { ReactComponent as SubmitRequestSVG } from '../../assets/submit-request.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Home() {
  const requests = useAppSelector((state) => state.data.requests);
  const requestsFulfilled = requests.filter((r) => r.status === 'fulfilled').length;
  const latestRequest = requests[0];
  const { t } = useTranslation();

  return (
    <div className={styles.root}>

      <h1>
        {t('features.home.header-text', { amount: requestsFulfilled })}
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
                {t('features.home.overview-card-text')}
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/my-requests'>
          <div className={styles.card}>
            <MyRequestsSVG />
            <div className={styles.textContainer}>
              <p>
                {t('features.home.my-requests-card-text')}
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/submit-request'>
          <div className={styles.card}>
            <SubmitRequestSVG />
            <div className={styles.textContainer}>
              <p>
                {t('features.home.submit-request-card-text')}
              </p>
            </div>
          </div>
        </NavLink>
      </div>

    </div>
  );
}
