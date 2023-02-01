
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './Notifications.module.css';
import { Notification } from '../../models/notification.model';
import { ReactComponent as ErrorSVG } from '../../assets/error.svg';
import { ReactComponent as WarningSVG } from '../../assets/warning.svg';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import { ReactComponent as SuccessSVG } from '../../assets/success.svg';
import { ReactComponent as PlusSVG } from '../../assets/plus.svg';
import { removeNotification } from '../../app/rootReducer';
import { useTranslation } from 'react-i18next';

export function Notifications() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.root.notifications);
  const { t } = useTranslation();

  const notificationsRendered = notifications.map((noti: Notification) => {
    const classname = `${styles.notification} ${styles[noti.type ?? 'normal']}`;
    let svg;

    switch (noti.type) {
      case 'error': svg = <ErrorSVG />; break;
      case 'success': svg = <SuccessSVG />; break;
      case 'warning': svg = <WarningSVG />; break;
      case 'normal':
      default: svg = <InfoSVG />;
    }

    return (
      <div key={noti.id} className={classname}>
        {svg}
        <p>{t(noti.message as any)}</p>
        <div
          className={styles.closeButton}
          onClick={() => dispatch(removeNotification(noti))}
        >
          <PlusSVG />
        </div>
      </div>
    );
  });

  return (
    <div className={styles.root}>
      {notificationsRendered}
    </div>
  );
}
