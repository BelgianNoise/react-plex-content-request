import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../app/hooks';
import { showAuthWindow } from '../../features/auth/authSlice';
import { Button } from '../button/Button';
import { ReactComponent as AuthFaceSVG } from '../../assets/auth-face.svg';
import styles from './NotLoggedIn.module.css';

export interface NotLoggedInProps {
  subtitle?: string;
}

export function NotLoggedIn(props: NotLoggedInProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <AuthFaceSVG />
      <p className={styles.title}>{t('components.not-logged-in.title')}</p>
      {props.subtitle ? (<p className={styles.subtitle}>{props.subtitle}</p>) : undefined}
      <Button
        buttonStyle={'secondary'}
        text={t('components.not-logged-in.button-text')}
        onClick={() => dispatch(showAuthWindow())}
      />
    </div>
  );
}
