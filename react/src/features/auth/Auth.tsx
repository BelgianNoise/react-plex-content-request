
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import styles from './Auth.module.css';

export function Auth() {
  const dispatch = useAppDispatch();


  return (
    <div className={styles.root}>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<div> LOGIN </div>} />
        <Route path="/register" element={<div> REGISTER </div>} />
        <Route path="/forgot-password" element={<div> FORGOT PW </div>} />
      </Routes>
    </div>
  );
}
