import { useRegisterMutation } from '../api/registerApi';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/app/store/store';
import { setToken } from '@/entities/session/model/sessionSlice';
import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';

const emailSchema = z.email('Неверный фомат почты');
const passwordSchema = z
  .string()
  .min(8, 'Минимум 8 символов')
  .regex(/[A-Z]/, 'Нужна хотя бы одна заглавная буква')
  .regex(/[0-9]/, 'Нужна хотя бы одна цифра')
  .regex(/[!@#$%^&*()_+{}[\]:;,.?\\/-]/, 'Нужен хотя бы один спецсимвол');

const registerFormSchema = z
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

type RegisterFormState = z.input<typeof registerFormSchema>;

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    mode: 'onChange',
  });
  const [registerMutation, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: RegisterFormState) => {
    try {
      const token = await registerMutation({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setToken(token));
      navigate('/profile');
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (error.status === 404) {
          setError('root', {
            type: 'server',
            message: 'Пользователь не найден',
          });
        } else if (error.status === 409) {
          setError('root', {
            type: 'server',
            message: 'Пользователь с указанной почтой уже существует',
          });
        } else if (isSerializedError(error)) {
          setError('root', {
            type: 'serialized',
            message: error.message,
          });
        } else {
          setError('root', {
            type: 'unknown',
            message: `Неизвестная ошибка`,
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Имя пользователя"
        placeholder="Введите никнейм"
        error={errors.username?.message}
        {...register('username')}
      />
      <Input
        label="Почта"
        placeholder="Введите почту"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Пароль"
        placeholder="Введите пароль"
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        label="Подтвердите пароль"
        placeholder="Введите пароль"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      {errors.root?.message && <div>{errors.root.message}</div>}
      <Button buttonType="button" type="submit" variant="primary" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
  );
};
