import z from 'zod';

const emailSchema = z.email('Неверный фомат почты');
const passwordSchema = z
  .string()
  .min(8, 'Минимум 8 символов')
  .regex(/[A-Z]/, 'Нужна хотя бы одна заглавная буква')
  .regex(/[0-9]/, 'Нужна хотя бы одна цифра');
// не знаю используется ли данное ограничение
// .regex(/[!@#$%^&*()_+{}[\]:;,.?\\/-]/, 'Нужен хотя бы один спецсимвол');

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type FormState = z.input<typeof loginFormSchema>;
