
import { useAppSelector } from '../../app/hooks';
import styles from './Notifications.module.css';
import { Notification } from '../../models/notification.model';

export function Notifications() {
  const notifications = useAppSelector((state) => state.root.notifications);

  return (
    <div className={styles.root}>
      {notifications.map((noti: Notification) => (
        <div key={noti.id}>
          {typeof noti.message === 'string' ? noti.message : <noti.message />}
        </div>
      ))}
    </div>
  );
}
