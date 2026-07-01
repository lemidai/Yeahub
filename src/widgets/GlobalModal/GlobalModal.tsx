import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalContentMap } from './modalContentMap';
import { RootState } from '@/app/store';
import { closeModal } from '@/app/store/slices/modalSlice/modalSlice';
import { Modal } from '@/shared/ui';

export const GlobalModal = () => {
  const dispatch = useDispatch();
  const { type, props } = useSelector((state: RootState) => state.modal);

  const handleClose = () => dispatch(closeModal());

  if (!type) return null;

  const ContentComponent = modalContentMap[type];
  if (!ContentComponent) return null;

  const finalProps = {
    ...props,
    isOpen: true,
    onClose: handleClose,
  };

  const TypedComponent = ContentComponent as React.ComponentType<typeof finalProps>;

  return (
    <Modal isOpen onClose={handleClose}>
      <TypedComponent {...finalProps} />
    </Modal>
  );
};
