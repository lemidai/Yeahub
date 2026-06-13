import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/MainHeader';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
