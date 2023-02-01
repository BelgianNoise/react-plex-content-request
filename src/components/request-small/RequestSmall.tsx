import { useTranslation } from 'react-i18next';
import { Request } from '../../models/request.model';
import { getImageSrc } from '../../util/get-image-src';
import { toTimeAgo } from '../../util/to-time-ago';
import styles from './RequestSmall.module.css';

export interface RequestSmallProps {
  request: Request;
}

export function RequestSmall(props: RequestSmallProps) {

  const { t } = useTranslation();
  const imagesrc = getImageSrc(props.request);
  const timeAgo = toTimeAgo(props.request.date, t);
  
  return (
    <div className={styles.root}>
      <img src={imagesrc} alt='poster' />
      <div className={styles.infoPane}>
        <p className={styles.text}>{props.request.text}</p>
        <div className={styles.statusContainer}>
          <span>{t('components.request-small.status')}: </span>
          <span className={styles[props.request.status]}>
            {t(`common.${props.request.status}`)}
          </span>
        </div>
        <p className={styles.footer}>{timeAgo} {t('components.request-small.by')} {props.request.requester}</p>
      </div>
    </div>
  );
};
