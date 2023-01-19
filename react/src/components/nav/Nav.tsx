
import { useAppDispatch } from '../../app/hooks';
import styles from './Nav.module.css';

export function Nav() {
  const dispatch = useAppDispatch();


  return (
    <div className={styles.root}> NAV </div>
  );
}
