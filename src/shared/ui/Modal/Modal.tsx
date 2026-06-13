import styles from './Modal.module.scss';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: ModalProps) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={clsx(styles.modal)} onClick={handleClose}>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};
// isOpen = false
// isOpen && styles.modalOn
