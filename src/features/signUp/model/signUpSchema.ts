import z from 'zod';

const emailSchema = z.email('Неверный фомат почты');
const passwordSchema = z
  .string()
  .min(8, 'Минимум 8 символов')
  .regex(/[A-Z]/, 'Нужна хотя бы одна заглавная буква')
  .regex(/[0-9]/, 'Нужна хотя бы одна цифра')
  .regex(/[!@#$%^&*()_+{}[\]:;,.?\\/-]/, 'Нужен хотя бы один спецсимвол');

export const signUpFormSchema = z
  .object({
    username: z.string().max(16, 'Максимум 16 символов'),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type SignUpFormState = z.input<typeof signUpFormSchema>;
