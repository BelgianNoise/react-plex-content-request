import { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../app/hooks';
import { TextInput } from '../../../../components/input/Input';
import { ReactComponent as EmailSVG } from '../../../../assets/email.svg';
import { ReactComponent as PasswordSVG } from '../../../../assets/password.svg';
import styles from './Register.module.css';
import { registerAccount } from '../../authThunks';
import { addNotification } from '../../../../app/notificationThunks';

export interface RegisterRef {
  submit: () => void
};

export const Register = forwardRef((props: {}, ref: Ref<RegisterRef>) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  useImperativeHandle(ref, () => ({ submit }));
  
  const submit = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        dispatch(registerAccount({ email, password}));
      } else {
        dispatch(addNotification({
          type: 'error',
          message: 'notification.password-mismatch',
          id: new Date().getTime().toString(),
          timeout: 5000,
        }));
      }
    }
  }

  return (
    <div className={styles.root}>
      <TextInput
        type='email'
        value={email}
        setValue={setEmail}
        label={t('features.auth.components.register.email-label')}
        icon={EmailSVG}
        autoComplete
        onEnter={() => submit()}
      />
      <TextInput
        type='password'
        value={password}
        setValue={setPassword}
        label={t('features.auth.components.register.password-label')}
        icon={PasswordSVG}
        onEnter={() => submit()}
      />
      <TextInput
        type='password'
        value={confirmPassword}
        setValue={setConfirmPassword}
        label={t('features.auth.components.register.confirm-password-label')}
        icon={PasswordSVG}
        onEnter={() => submit()}
      />
    </div>
  );
})
