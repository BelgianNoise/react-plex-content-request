import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { PageNotFound } from './components/page-not-found/PageNotFound';
import { Submit } from './features/submit/Submit';
import { Auth } from './features/auth/Auth';
import { Home } from './features/home/Home';
import { Overview } from './features/overview/Overview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={

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
                  <Route path="/my-requests" element={<Overview />} />
                  <Route path="/submit-request" element={<Submit />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
    
              </div>
            </div>
          </div>

        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
