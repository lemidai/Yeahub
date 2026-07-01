export type ResetPasswordModalType = 'resetPassword';
export type ResetPasswordModalOpenProps = {
  type: ResetPasswordModalType;
  props?: { sendLetter: () => Promise<void> };
};
