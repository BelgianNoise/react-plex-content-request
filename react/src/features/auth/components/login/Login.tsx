import { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { TextInput } from '../../../../components/input/Input';
import { ReactComponent as EmailSVG } from '../../../../assets/email.svg';
import { ReactComponent as PasswordSVG } from '../../../../assets/password.svg';

import styles from './Login.module.css';

export interface LoginRef {
  submit: () => void
};

export const Login = forwardRef((props: {}, ref: Ref<LoginRef>) => {

  const dispatch = useAppDispatch();

  useImperativeHandle(ref, () => ({ submit }));
  
  const submit = () => {
    console.log('=== handling submit bruur LOGIN');
  }

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className={styles.root}>
      <TextInput
        type='email'
        value={email}
        setValue={setEmail}
        label='Email'
        icon={EmailSVG}
        autoComplete
      />
      <TextInput
        type='password'
        value={password}
        setValue={setPassword}
        label='Password'
        icon={PasswordSVG}
      />
    </div>
  );
})
