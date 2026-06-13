import { setToken } from '@/entities/session/model/sessionSlice';
import { useLoginMutation } from '../api/loginApi';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/store/store';
import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';
import { authFormStyles } from '@/shared/styles';

const emailSchema = z.email('Неверный фомат почты');
const passwordSchema = z
  .string()
  .min(8, 'Минимум 8 символов')
  .regex(/[A-Z]/, 'Нужна хотя бы одна заглавная буква')
  .regex(/[0-9]/, 'Нужна хотя бы одна цифра')
  .regex(/[!@#$%^&*()_+{}[\]:;,.?\\/-]/, 'Нужен хотя бы один спецсимвол');

const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

type FormState = z.input<typeof loginFormSchema>;

export const LoginFormRHFZod = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FormState) => {
    try {
      const token = await login({
        username: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setToken(token));
      navigate('/profile');
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (error.status === 401) {
          setError('root', {
            type: 'server',
            message: 'Неверные почта или пароль',
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
      <h3 style={{ textAlign: 'center' }}>REACT HOOK FORM + ZOD</h3>
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
      {errors.root?.message && <div>{errors.root.message}</div>}
      <div className={authFormStyles.linkWrapper}>
        <Link to="/auth/resetPassword" className={authFormStyles.link}>
          Забыли пароль?
        </Link>
      </div>
      <Button buttonType="button" type="submit" variant="primary" fullWidth>
        Вход
      </Button>
    </form>
  );
};
