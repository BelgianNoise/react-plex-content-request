import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Button } from '../../components/button/Button';
import { RequestSmall } from '../../components/request-small/RequestSmall';
import styles from './Overview.module.css';
import { ReactComponent as CheckSVG } from '../../assets/check.svg';
import { useTranslation } from 'react-i18next';

export function Overview() {
  const [ showAmount, setShowAmount ] = useState(20);
  const [ showPending, setShowPending ] = useState(true);
  const [ showFulfilled, setShowFulfilled ] = useState(true);
  const [ showRejected, setShowRejected ] = useState(true);
  const [ showBusy, setShowBusy ] = useState(true);

  const allRequests = useAppSelector((state) => state.data.requests.filter((r) => {
    switch (r.status) {
      case 'fulfilled': return showFulfilled;
      case 'rejected': return showRejected;
      case 'pending': return showPending;
      case 'busy': return showBusy;
      default: return false;
    }
  }));

  const totalRequests = allRequests.length;
  const requests = allRequests.slice(0,showAmount);

  const { t } = useTranslation();

  const showMoreRequests = () => {
    setShowAmount(showAmount + 20);
  };

  return (
    <div className={styles.root}>

      <div className={styles.filterContainer}>
        <p>{t('features.overview.filters')}:</p>

        <Button
          icon={<CheckSVG />}
          text={t('common.fulfilled')}
          buttonStyle={showFulfilled ? 'primary' : 'secondary'}
          onClick={() => setShowFulfilled(!showFulfilled)}
        />

        <Button
          icon={<CheckSVG />}
          text={t('common.rejected')}
          buttonStyle={showRejected ? 'primary' : 'secondary'}
          onClick={() => setShowRejected(!showRejected)}
        />

        <Button
          icon={<CheckSVG />}
          text={t('common.pending')}
          buttonStyle={showPending ? 'primary' : 'secondary'}
          onClick={() => setShowPending(!showPending)}
        />

        <Button
          icon={<CheckSVG />}
          text={t('common.busy')}
          buttonStyle={showBusy ? 'primary' : 'secondary'}
          onClick={() => setShowBusy(!showBusy)}
        />

      </div>

      <div className={styles.requestsList}>
        {requests.map((req) => (
          <RequestSmall key={req.id} request={req}/>
        ))}
      </div>

      {showAmount < totalRequests ? (
        <Button
          onClick={showMoreRequests}
          buttonStyle={'secondary'}
          text={t('features.overview.show-more-requests')}
        />
      ) : undefined}
    
    </div>
  );
}
