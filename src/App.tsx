import React from 'react';
import styles from './App.module.css';
console.log('styles:', styles);
const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <h1>Welcome to My Pet Project!</h1>
      <p>Webpack + React + TypeScript настроены успешно 🚀</p>
    </div>
  );
};

export default App;