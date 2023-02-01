import { forwardRef, Ref, useImperativeHandle } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { goToSignIn } from '../../authSlice';
import styles from './ResetPassword.module.css';

export interface ResetPasswordRef {
  submit: () => void
};

export const ResetPassword = forwardRef((props: {}, ref: Ref<ResetPasswordRef>) => {

  const dispatch = useAppDispatch();

  useImperativeHandle(ref, () => ({ submit }));
  
  const submit = () => {
    console.log('=== handling submit bruur RESETPASSWORD');
  }

  return (
    <div className={styles.root}>
      RESETPASSWORD
      <button className='secondary' onClick={() => dispatch(goToSignIn())}>sdffssdsf</button>
    </div>
  );
})
