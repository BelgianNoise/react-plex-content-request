
import { useAppDispatch } from '../../app/hooks';
import styles from './Home.module.css';

export function Home() {
  const dispatch = useAppDispatch();


  return (
    <div className={styles.root}> HOME </div>
  );
}
