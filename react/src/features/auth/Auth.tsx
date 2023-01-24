import { useTranslation } from 'react-i18next';
import styles from './Auth.module.css';
import { ReactComponent as PlusSVG } from '../../assets/plus.svg';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { hideAuthWindow } from './authSlice';
import { Login, LoginRef } from './components/login/Login';
import { Register, RegisterRef } from './components/register/Register';
import { ResetPassword, ResetPasswordRef } from './components/reset-password/ResetPassword';
import { AuthWindowStatus } from '../../models/auth-window-status';
import { useRef } from 'react';
import { Button } from '../../components/button/Button';

export function Auth() {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authWindowStatus = useAppSelector((state) => state.auth.status);
  const loading = useAppSelector((state) => state.auth.loading);

  const loginRef = useRef<LoginRef>(null);
  const registerRef = useRef<RegisterRef>(null);
  const resetPasswordRef = useRef<ResetPasswordRef>(null);
  const handleButtonPress = () => {
    loginRef.current?.submit();
    registerRef.current?.submit();
    resetPasswordRef.current?.submit();
  };

  return (
    <div className={styles.root}>

      <div className={styles.header}>
        <div>{t(`features.auth.header.${authWindowStatus}`)}</div>
        <PlusSVG onClick={() => dispatch(hideAuthWindow())} />
      </div>

      <div className={styles.content}>
        {(() => {
          switch (authWindowStatus) {
            case AuthWindowStatus.SING_IN: return <Login ref={loginRef}/>
            case AuthWindowStatus.REGISTER: return <Register ref={registerRef}/>
            case AuthWindowStatus.FORGOT_PASSWORD: return <ResetPassword ref={resetPasswordRef}/>
            default: <div>(╯°□°）╯︵ ┻━┻</div>
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
        <Button
          style={'primary'}
          text={t(`features.auth.footer.${authWindowStatus}`)}
          onClick={handleButtonPress}
          disabled={loading}
          loading={loading}
        />
      </div>

    </div>
  );
}
