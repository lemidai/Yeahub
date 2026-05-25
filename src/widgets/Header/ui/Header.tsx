import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link to="/main">Go to Main</Link>
        </div>
        <div className={styles.auth}>
          <Link to="/main">Вход</Link>
          <Link to="/main">Регистрация</Link>
        </div>
      </div>
    </header>
  );
};
