
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import styles from './PageNotFound.module.css';

export function PageNotFound() {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <p className={styles.errorCode}>404</p>
      <p className={styles.text}>{t('components.page-not-found.text')}</p>
      <Link to={'/'}>
        <Button
          text={t('components.page-not-found.button-text')}
          buttonStyle={'secondary'}
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}
