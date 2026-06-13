import styles from './LoginPage.module.scss';
import { Section } from '@/shared/ui/Section/Section';
import { Link } from 'react-router-dom';
import { LoginFormRHFZod } from '@/features/loginRHFZod/ui/LoginForm';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.authMain}>
          <Section title="Вход в личный кабинет" headSection={false}>
            <div className={styles.form}>
              {/* <LoginForm /> */}
              {/* <LoginFormRHF /> */}
              <LoginFormRHFZod />
            </div>
          </Section>
        </div>
        <div className={styles.authExtra}>
          <p>Нет аккаунта?</p>
          <Link to="/auth/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};
