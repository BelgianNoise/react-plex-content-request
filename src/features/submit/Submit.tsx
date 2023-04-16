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
  const [ imdbLink, setImdbLink ] = useState('');

  const submit = () => {
    if (imdbLink) {
      if (!imdbLink.includes('imdb.com/')) {
        dispatch(addNotification({
          type: 'warning',
          message: 'notification.submitted-request-imdb-link-invalid',
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
        imdbLink: imdbLink,
      };
      dispatch(submitRequest({ request: newRequest }));
      setContantName('');
      setImdbLink('');
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
          <TextInput
            type='text'
            value={imdbLink}
            setValue={setImdbLink}
            label={t('features.submit.imdb-link-label')}
            icon={InfoSVG}
            onEnter={() => submit()}
            placeHolder='https://www.imdb.com/title/tt0386676/'
          />
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
