import { HashRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { PageNotFound } from './components/page-not-found/PageNotFound';
import { Submit } from './features/submit/Submit';
import { Auth } from './features/auth/Auth';
import { Home } from './features/home/Home';
import { Overview } from './features/overview/Overview';
import { useAppDispatch, useAppSelector, useEffectOnce } from './app/hooks';
import { hideAuthWindow } from './features/auth/authSlice';
import { MouseEventHandler } from 'react';
import { Loading } from './components/loading/Loading';
import { Notifications } from './components/notifications/Notifications';
import { firebaseAuth } from './app/firebase';
import { User } from 'firebase/auth';
import { setIsLoggedIn } from './features/auth/authThunks';
import { firestoreSubscribe } from './app/firestore';
import { MyRequests } from './features/my-requests/MyRequests';

function App() {
  const showAuthWindow = useAppSelector((state) => state.auth.showAuthWindow && !state.auth.isLoggedIn);
  const dispatch = useAppDispatch();

  const closeAuthWindow: MouseEventHandler<HTMLDivElement> = (event) => {
    // event.target is the specific element and event.currentTarget will always be the div container
    // So only if a user clicks on the div container itself the window must close
    if ( event.target === event.currentTarget) {
      dispatch(hideAuthWindow());
    }
  };

  const showNotifications = useAppSelector((state) => state.root.notifications.length);
  const showLoadingBar = useAppSelector((state) =>
    state.root.loading || state.auth.loading);

  // See custom hook in hooks.ts
  useEffectOnce(() => {

    firebaseAuth.onAuthStateChanged((user: User | null) => {
      dispatch(setIsLoggedIn(!!user))
    });

    firestoreSubscribe(dispatch);

  });


  return (
    <HashRouter>
      <div className={styles.root}>

        {showLoadingBar ? (
          <div className={styles.loadingContainer}>
            <Loading />
          </div>
        ) : undefined}

        {showNotifications ? (
          <div className={styles.notificationsContainer}>
            <Notifications />
          </div>
        ) : undefined}

        {showAuthWindow ? (
          <div className={styles.authWindow} onClick={closeAuthWindow}>
            <Auth />
          </div>
        ) : undefined}

        <div className={styles.appRoot}>
          <Header />
          <div className={styles.appRootMain}>
            <div className={styles.nav}>
              <Nav />
            </div>
            <div className={styles.content}>
      
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/my-requests" element={<MyRequests />} />
                <Route path="/submit-request" element={<Submit />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>

            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
