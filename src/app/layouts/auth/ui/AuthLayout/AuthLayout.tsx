import styles from './AuthLayout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { AuthSidebar } from '@/widgets/AuthSidebar/ui/AuthSidebar';
import { Icon } from '@/shared/ui/Icon/Icon';
import { GlobalModal } from '@/widgets/GlobalModal/GlobalModal';

export const AuthLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <AuthSidebar />
        <div className={styles.header}>
          <Link className={styles.logos} to="/">
            <Icon name="logoPurpleTree" size={33} />
            <Icon name="logoBlackText" width={99} height={32} />
          </Link>
        </div>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <GlobalModal />
    </>
  );
};
