
import { useAppSelector } from '../../app/hooks';
import styles from './Home.module.css';

export function Home() {
  const requests = useAppSelector((state) => state.data.requests);

  return (
    <div className={styles.root}>
      {requests.length}

      NEXT UP:<br/>
        - implement home page<br/>
        - style notifications<br/>
        - style not logged in page<br/>
        - style 404 page<br/>
        - implement account registration<br/>
        - implement password reset<br/>
    </div>
  );
}
