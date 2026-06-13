import styles from './RegisterPage.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { Section } from '@/shared/ui/Section/Section';
import { Link } from 'react-router-dom';
import { RegisterForm } from '@/features/register/ui/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.authMain}>
          <Section title="Регистрация" headSection={false}>
            <div className={styles.form}>
              <RegisterForm />
            </div>
          </Section>
        </div>
        <div className={styles.authExtra}>
          <p>Есть аккаунт?</p>
          <Link to="/auth/login" className={styles.link}>
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
