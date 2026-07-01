import styles from './ProfilePage.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { useLazyLogoutQuery } from '@/entities/session/registerApi';
import { useAppSelector } from '@/app/store/hooks';

export const ProfilePage = () => {
  const userName = useAppSelector((state) => state.session.userData?.username);
  const [logout] = useLazyLogoutQuery();
  const handleLogout = () => {
    logout();
  };
  return (
    <div className={styles.main}>
      <h2 className={styles.welcome}>Добро пожаловать {userName}!</h2>
      <Button buttonType="button" onClick={handleLogout} variant="primary">
        Выйти
      </Button>
    </div>
  );
};
