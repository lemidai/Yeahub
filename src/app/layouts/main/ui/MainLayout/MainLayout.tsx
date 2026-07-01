import styles from './MainLayout.module.scss';
import { Header } from '@/widgets/MainHeader';
import { Outlet } from 'react-router-dom';
import { GlobalModal } from '@/widgets/GlobalModal';
import { Footer } from './Footer/Footer';

export const MainLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
      <GlobalModal />
    </>
  );
};
