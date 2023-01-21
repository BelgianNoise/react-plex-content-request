import { forwardRef, Ref, useImperativeHandle } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { goToForgotPassowrd } from '../../authSlice';
import styles from './Register.module.css';

export interface RegisterRef {
  submit: () => void
};

export const Register = forwardRef((props: {}, ref: Ref<RegisterRef>) => {

  const dispatch = useAppDispatch();

  useImperativeHandle(ref, () => ({ submit }));
  
  const submit = () => {
    console.log('=== handling submit bruur REGISTER');
  }

  return (
    <div className={styles.root}>
      REGISTER
      <button className='secondary' onClick={() => dispatch(goToForgotPassowrd())}>sdffssdsf</button>
    </div>
  );
})
