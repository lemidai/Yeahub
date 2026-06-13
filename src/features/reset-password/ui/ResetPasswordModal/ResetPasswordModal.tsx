import { Modal } from '@/shared/ui/Modal/Modal';
import { useEffect, useState } from 'react';
import styles from './ResetPasswordModal.module.scss';
import { Button } from '@/shared/ui/Button/Button';

type RessetPaswordModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RessetPasswordModal = ({ isOpen, onClose }: RessetPaswordModalProps) => {
  const [resendTimer, setResendTimer] = useState(60);
  useEffect(() => {
    if (!isOpen) return;
    setResendTimer(60);
    const timer = setInterval(
      () =>
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    isOpen && (
      <Modal onClose={onClose}>
        <div className={styles.content}>
          <p>Мы отправили письмо с инструкциями</p>
          <p>
            Если вы не получили письмо с инструкциями, проверьте, пожалуйста, папку «Спам» или
            попробуйте отправить запрос ещё раз
          </p>
          <p className={styles.timer}>{resendTimer}</p>
          <Button buttonType="button" variant="primary">
            Отправить письмо
          </Button>
        </div>
      </Modal>
    )
  );
};
