import React from 'react';
import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Overview } from './features/overview/Overview';

function App() {
  return (
    <div className={styles.appRoot}>
      <Header />
      <div className={styles.appRootMain}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.content}>
          <Overview />
        </div>
      </div>
    </div>
  );
}

export default App;
