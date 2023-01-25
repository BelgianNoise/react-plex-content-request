
import { useAppDispatch } from '../../app/hooks';
import styles from './Home.module.css';

export function Home() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      NEXT UP:<br/>
        - Add two loading styles to Button<br/>
        - Finish Login component <br/>
        - Implement login with firebase <br/>
    </div>
  );
}
