import { useAppSelector } from '../../app/hooks';
import { Overview } from '../../components/overview/Overview';
import { ReactComponent as OverviewSVG } from '../../assets/overview.svg';
import { useTranslation } from 'react-i18next';
import styles from './GeneralOverview.module.css';

export function GeneralOverview() {

  const { t } = useTranslation();
  const allRequests = useAppSelector((state) => state.data.requests);

  return allRequests.length > 0 ? (
    <Overview requests={allRequests} />
  ) : (
    <div className={styles.empty}>
      <OverviewSVG />
      <p className={styles.title}>{t('features.general-overview.empty-title')}</p>
      <p className={styles.subtitle}>{t('features.general-overview.empty-subtitle')}</p>
    </div>
  )
}
