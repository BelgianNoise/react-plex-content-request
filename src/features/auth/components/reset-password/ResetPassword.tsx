import { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { TextInput } from '../../../../components/input/Input';
import styles from './ResetPassword.module.css';
import { ReactComponent as EmailSVG } from '../../../../assets/email.svg';
import { useTranslation } from 'react-i18next';
import { resetPassword } from '../../authThunks';

export interface ResetPasswordRef {
  submit: () => void
};

export const ResetPassword = forwardRef((props: {}, ref: Ref<ResetPasswordRef>) => {

  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  useImperativeHandle(ref, () => ({ submit }));
  
  const submit = () => {
    if (email) dispatch(resetPassword({ email }));
  }

  const [ email, setEmail ] = useState('');

  return (
    <div className={styles.root}>
      <TextInput
        type='email'
        value={email}
        setValue={setEmail}
        label={t('features.auth.components.reset-password.email-label')}
        icon={EmailSVG}
        autoComplete
        onEnter={() => submit()}
      />
    </div>
  );
})
