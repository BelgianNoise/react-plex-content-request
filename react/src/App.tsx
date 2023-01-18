import React from 'react';
import styles from './App.module.css';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className={styles.appRoot}>
      <Header />
      <div className={styles.appRootMain}>
        <div>tttttt</div>
      </div>
    </div>
  );
}

export default App;
