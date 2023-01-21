import { forwardRef, Ref, useImperativeHandle } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { goToRegister } from '../../authSlice';
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

  return (
    <div className={styles.root}>
      LOGIN 
      <button className='secondary' onClick={() => dispatch(goToRegister())}>sdffssdsf</button>
    </div>
  );
})
