import React from 'react';
import styles from './App.module.css';

const App: React.FC = () => {
  const handleClick = (): void => {
    console.warn('Button clicked!');
  };

  return (
    <div className={styles.app}>
      <h1>Welcome to My Pet Project!</h1>
      <p>Webpack + React + TypeScript настроены успешно 🚀</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
