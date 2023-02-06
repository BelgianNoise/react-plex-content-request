import { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { TextInput } from '../../../../components/input/Input';
import { ReactComponent as EmailSVG } from '../../../../assets/email.svg';
import { ReactComponent as PasswordSVG } from '../../../../assets/password.svg';
import styles from './Login.module.css';
import { goToForgotPassowrd } from '../../authSlice';
import { login } from '../../authThunks';
import { useTranslation } from 'react-i18next';

export interface LoginRef {
  submit: () => void
};

export const Login = forwardRef((props: {}, ref: Ref<LoginRef>) => {

  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useImperativeHandle(ref, () => ({ submit }));
  
  const submit = () => {
    if (email && password) dispatch(login({ email, password }));
  }

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className={styles.root}>
      <TextInput
        type='email'
        value={email}
        setValue={setEmail}
        label={t('features.auth.components.login.email-label')}
        icon={EmailSVG}
        autoComplete
        onEnter={() => submit()}
      />
      <div className={styles.passwordContainer}>
        <TextInput
          type='password'
          value={password}
          setValue={setPassword}
          label={t('features.auth.components.login.password-label')}
          icon={PasswordSVG}
          onEnter={() => submit()}
        />
        <span
          className={styles.forgotPassword}
          onClick={() => dispatch(goToForgotPassowrd())}
        >{t('features.auth.components.login.forgot-password-span')}</span>
      </div>
    </div>
  );
})
