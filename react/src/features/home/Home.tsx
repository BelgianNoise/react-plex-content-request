
import { useAppDispatch } from '../../app/hooks';
import styles from './Home.module.css';

export function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      NEXT UP:<br/>
        - Finish Login component <br/>
        - Implement login with firebase <br/>
    </div>
  );
}
