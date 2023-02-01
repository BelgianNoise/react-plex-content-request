
import styles from './Loading.module.css';

export function Loading() {
  return (
    <div className={styles.root}>
      <div className={styles.moving}></div>
    </div>
  );
}
