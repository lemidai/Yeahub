import styles from './ResetPasswordModal.module.scss';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';

interface RessetPasswordModalProps {
  sendLetter: () => Promise<void>;
}

export const ResetPasswordModal = ({ sendLetter }: RessetPasswordModalProps) => {
  const [resendTimer, setResendTimer] = useState(60);
  const [isResending, setIsResending] = useState(true);

  useEffect(() => {
    if (!isResending) return;
    const timer = setInterval(
      () =>
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsResending(false);
            return 0;
          }
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(timer);
  }, [isResending]);

  const handleResend = async () => {
    setResendTimer(60);
    setIsResending(true);
    await sendLetter();
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Мы отправили письмо с инструкциями</h2>
      <p className={styles.text}>
        Если вы не получили письмо с инструкциями, проверьте, пожалуйста, папку «Спам» или
        попробуйте отправить запрос ещё раз
      </p>
      <p className={styles.timer}>{resendTimer}</p>
      <Button buttonType="button" onClick={handleResend} variant="primary" disabled={isResending}>
        Отправить письмо
      </Button>
    </div>
  );
};
