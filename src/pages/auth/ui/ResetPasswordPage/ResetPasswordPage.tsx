import styles from './ResetPasswordPage.module.scss';
import { Section } from '@/shared/ui/Section/Section';
import { Link } from 'react-router-dom';
import { ResetPasswordForm } from '@/features/reset-password/ui/ResetPasswordForm/ResetPasswordForm';
import { RessetPasswordModal } from '@/features/reset-password/ui/ResetPasswordModal/ResetPasswordModal';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';

export const ResetPasswordPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.authMain}>
          <Section title="Вход в личный кабинет" headSection={false}>
            <div className={styles.form}>
              <ResetPasswordForm />
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
      <Button buttonType="button" onClick={() => setIsOpen(true)} variant="primary">
        Открыть модалку
      </Button>
      <RessetPasswordModal isOpen={isOpen} onClose={() => setIsOpen(false)}></RessetPasswordModal>
    </div>
  );
};
