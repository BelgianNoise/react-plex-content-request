import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../app/hooks';
import { NotLoggedIn } from '../../components/not-logged-in/NotLoggedIn';
import styles from './Submit.module.css';

export function Submit() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      {isLoggedIn ? (
        <div>
          WIP
        </div>
      ) : (
        <NotLoggedIn
          subtitle={t('features.submit.not-logged-in-subtitle')}
        />
      )}
    </div>
  );
}
