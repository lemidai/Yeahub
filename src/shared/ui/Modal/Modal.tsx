import styles from './Modal.module.scss';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={clsx(styles.modal)} onClick={handleClose}>
      <div className={styles.contentWrapper}>
        <button onClick={handleClose} className={styles.closeModalButton}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
