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
          NEXT UP:<br/>
            - change RequestSmall to contain update and delete functionality
            - implement submit request page <br/>
            - change firestore rules <br/>
            - put mention of new site on old site <br/>
            - implement getImageSrc() <br/>
        </div>
      ) : (
        <NotLoggedIn
          subtitle={t('features.submit.not-logged-in-subtitle')}
        />
      )}
    </div>
  );
}
