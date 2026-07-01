import { ModalType } from '@/app/store/slices/modalSlice/types';
import { ResetPasswordModal } from '@/features/reset-password/ui/ResetPasswordModal/ResetPasswordModal';
import { ShortAnswerModal } from '@/features/shortAnswerModal/ui/ShortAnswerModal';
import React from 'react';

export const modalContentMap: Record<ModalType, React.ComponentType<any>> = {
  resetPassword: ResetPasswordModal,
  shortAnswer: ShortAnswerModal,
};
