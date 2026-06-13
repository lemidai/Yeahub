import { Link, Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';
import { AuthSidebar } from '@/widgets/AuthSidebar/ui/AuthSidebar';
import { Icon } from '@/shared/ui/Icon/Icon';

export const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <AuthSidebar />
      <div className={styles.header}>
        <Link to="/">
          <Icon name="logoPurpleTree" size={33} />
          <Icon name="logoBlackText" width={99} height={32} />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
