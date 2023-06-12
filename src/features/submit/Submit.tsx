import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { NotLoggedIn } from '../../components/not-logged-in/NotLoggedIn';
import styles from './Submit.module.css';
import { TextInput } from '../../components/input/Input';
import { useState } from 'react';
import { ReactComponent as FilmSVG } from '../../assets/film.svg';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import { Button } from '../../components/button/Button';
import { getAuth } from 'firebase/auth';
import { Request } from '../../models/request.model';
import { submitRequest } from '../../app/dataThunks';
import { v4 } from 'uuid';
import { addNotification } from '../../app/notificationThunks';

export function Submit() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const authenticatedUser = getAuth().currentUser?.email!;

  const [ contentName, setContantName ] = useState('');
  const [ streamingLink, setStreamingLink ] = useState('');

  const submit = () => {
    if (streamingLink) {
      try { new URL(streamingLink); }
      catch {
        dispatch(addNotification({
          type: 'warning',
          message: 'notification.submitted-request-streaming-link-invalid',
          id: new Date().getTime().toString(),
        }));
        return;
      }
    }
    if (contentName) {
      const newRequest: Request = {
        id: v4(),
        date: new Date().getTime(),
        requester: authenticatedUser,
        status: 'pending',
        sort: 'serie',
        text: contentName,
        streamingLink: streamingLink,
      };
      dispatch(submitRequest({ request: newRequest }));
      setContantName('');
      setStreamingLink('');
    };
  };

  return (
    <div className={styles.root}>
      {isLoggedIn ? (
        <div className={styles.container}>
          <TextInput
            type='text'
            value={contentName}
            setValue={setContantName}
            label={t('features.submit.content-name-label')}
            icon={FilmSVG}
            onEnter={() => submit()}
            placeHolder='The Office US'
          />
          <div>
            <TextInput
              type='text'
              value={streamingLink}
              setValue={setStreamingLink}
              label={t('features.submit.streaming-link-label')}
              icon={InfoSVG}
              onEnter={() => submit()}
              placeHolder='https://vtm.be/vtmgo/de-kotmadam'
            />
            <span className={styles.subSpan}>{t('features.submit.where-stream')} <a href="https://waar-streamen.nasaj.be/" target="_blank" rel="noreferrer">https://waar-streamen.nasaj.be/</a></span>
          </div>
          <Button
            text={t('features.submit.submit-button')}
            onClick={() => submit()}
            buttonStyle='primary'
          />
        </div>
      ) : (
        <NotLoggedIn
          subtitle={t('features.submit.not-logged-in-subtitle')}
        />
      )}
    </div>
  );
}
