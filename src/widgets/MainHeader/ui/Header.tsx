import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button } from '@/shared/ui/Button/Button';
// import { useLazyLogoutQuery } from '@/entities/session/api/sessionApi';
import { useAppDispatch } from '@/app/store/store';
import { removeToken } from '@/entities/session/model/sessionSlice';
import { useLazyLogoutQuery } from '@/entities/session/registerApi';

export const Header = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLazyLogoutQuery();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap();

      dispatch(removeToken());
      navigate('/auth/login');
      alert('Вы успешно вышли из аккаунта');
    } catch {
      dispatch(removeToken());
      alert('Произошла ошибка, но данные очищены');
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/main">
            <Icon name="logoBlackText" width={115} />
          </Link>
        </div>
        <div className={styles.auth}>
          <Button buttonType="innerLink" to="/auth/login" variant="secondary">
            Вход
          </Button>
          <Button
            buttonType="innerLink"
            to="/auth/login"
            variant="secondary"
            onClick={handleLogout}
          >
            Выход
          </Button>
          <Button buttonType="innerLink" to="/auth/register" variant="primary">
            Регистрация
          </Button>
        </div>
        <button className={styles.burger}>
          <Icon name="burger" />
        </button>
      </div>
    </header>
  );
};
