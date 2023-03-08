import { firebaseAuth } from '../../app/firebase';
import { useAppSelector } from '../../app/hooks';
import { Overview } from '../../components/overview/Overview';
import { useTranslation } from 'react-i18next';
import styles from './MyRequests.module.css';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import { NotLoggedIn } from '../../components/not-logged-in/NotLoggedIn';

export function MyRequests() {

  const { t } = useTranslation();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const loggedInUser = firebaseAuth.currentUser?.email;
  const filteredRequests = useAppSelector((state) => state.data.requests.filter((r) => r.requester === loggedInUser));

  return (
    <div className={styles.root}>
      {isLoggedIn
        ?  filteredRequests.length > 0
          ? <Overview requests={filteredRequests} />
          : <div className={styles.empty}>
              <OverviewSVG />
              <p className={styles.title}>{t('features.my-requests.empty-title')}</p>
              <p className={styles.subtitle}>{t('features.my-requests.empty-subtitle')}</p>
            </div> // TODO add button to submit page
        : (
        <NotLoggedIn
          subtitle={t('features.my-requests.not-logged-in-subtitle')}
        />
        )
      }
    </div>
  )
}
