import z from 'zod';

const emailSchema = z.email('Неверный фомат почты');
export const resetPasswordFormSchema = z.object({
  email: emailSchema,
});

export type resetPasswordFormState = z.input<typeof resetPasswordFormSchema>;
