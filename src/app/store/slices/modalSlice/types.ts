import {
  ResetPasswordModalOpenProps,
  ResetPasswordModalType,
} from '@/features/reset-password/model/types';
import {
  ShortAnswerModalType,
  ShortAnwerModalOpenProps,
} from '@/features/shortAnswerModal/model/types';

export type ModalType = ResetPasswordModalType | ShortAnswerModalType;

export type ModalOpenProps = ResetPasswordModalOpenProps | ShortAnwerModalOpenProps;

export interface ModalState {
  type: ModalType | null;
  props?: Record<string, unknown>;
}
