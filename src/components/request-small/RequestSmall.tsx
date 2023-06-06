import { useTranslation } from 'react-i18next';
import { Request } from '../../models/request.model';
import { getImageSrc } from '../../util/get-image-src';
import { toTimeAgo } from '../../util/to-time-ago';
import styles from './RequestSmall.module.css';
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';
import { ReactComponent as CaretSVG } from '../../assets/caret.svg';
import { useAppDispatch } from '../../app/hooks';
import { deleteRequest, updateRequest } from '../../app/dataThunks';
import { getAuth } from 'firebase/auth';
import { isAdmin } from '../../util/is-admin';

export interface RequestSmallProps {
  request: Request;
}

export function RequestSmall(props: RequestSmallProps) {

  const { t } = useTranslation();
  const imagesrc = getImageSrc(props.request);
  const timeAgo = toTimeAgo(props.request.date, t);
  const dispatch = useAppDispatch();
  const authenticatedUser = getAuth().currentUser?.email;

  const changeStatus = (status: 'pending' | 'busy' | 'rejected' | 'fulfilled') => {
    dispatch(updateRequest({ request: { ...props.request, status } }));
  };

  const parseEmail = (email: string) => {
    const first = email.split('@')[0];
    return first
      .split('.')
      .map((s) => s.replace(/[0-9]/gim, ''))
      .filter((s) => s.length > 0)
      .map((s) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
      .join(' ');
  }

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
        <p className={styles.footer}>{timeAgo} {t('components.request-small.by')} {parseEmail(props.request.requester)}</p>
      </div>

      {authenticatedUser === props.request.requester || isAdmin(authenticatedUser) ? (
        <div className={styles.actionsContainer}>
          {isAdmin(authenticatedUser) ? (
            <>
              <CaretSVG />
              <div className={styles.popupContainer}>
                <span className={styles.fulfilled} onClick={() => changeStatus('fulfilled')}>{t(`common.fulfilled`)}</span>
                <span className={styles.pending} onClick={() => changeStatus('pending')}>{t(`common.pending`)}</span>
                <span className={styles.busy} onClick={() => changeStatus('busy')}>{t(`common.busy`)}</span>
                <span className={styles.rejected} onClick={() => changeStatus('rejected')}>{t(`common.rejected`)}</span>
              </div>
            </>
          ) : undefined}
          <DeleteSVG
            onClick={() => dispatch(deleteRequest({ request: props.request }))}
          />
        </div>
      ) : undefined}

    </div>
  );
};
