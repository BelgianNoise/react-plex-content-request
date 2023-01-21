import { useTranslation } from 'react-i18next';
import styles from './Auth.module.css';
import { ReactComponent as PlusSVG } from '../../assets/plus.svg';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { hideAuthWindow } from './authSlice';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { ResetPassword } from './components/reset-password/ResetPassowrd';
import { AuthWindowStatus } from '../../models/auth-window-status';

export function Auth() {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authWindowStatus = useAppSelector((state) => state.auth.status);

  return (
    <div className={styles.root}>

      <div className={styles.header}>
        <div>{t(`features.auth.header.${authWindowStatus}`)}</div>
        <PlusSVG onClick={() => dispatch(hideAuthWindow())} />
      </div>

      <div className={styles.content}>
        {(() => {
          switch (authWindowStatus) {
            case AuthWindowStatus.SING_IN: return <Login />
            case AuthWindowStatus.REGISTER: return <Register />
            case AuthWindowStatus.FORGOT_PASSWORD: return <ResetPassword />
            default: <Login />
          }
        })()}
      </div>

      <div className={styles.footer}>
        <div className={styles.toolTipContainer}>
          <InfoSVG />
          <div className={styles.toolTip}>
            {t('features.auth.footer.tool-tip')}
          </div>
        </div>
        <button className='primary'>
          {t(`features.auth.footer.${authWindowStatus}`)}
        </button>
      </div>

    </div>
  );
}
