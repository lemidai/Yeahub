import { authFormStyles } from '@/shared/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema, SignUpFormState } from '../model/signUpSchema';
import { useSignUpMutation } from '../api/signUpApi';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/store/store';
import { setSession } from '@/entities/session/model/sessionSlice';
import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { PasswordInput } from '@/shared/ui/PasswordInput/PasswordInput';

export const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onChange',
  });
  const [registerMutation] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SignUpFormState) => {
    try {
      const token = await registerMutation({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setSession(token));
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
    <form className={authFormStyles.form} onSubmit={handleSubmit(onSubmit)}>
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
      <PasswordInput
        label="Пароль"
        placeholder="Введите пароль"
        error={errors.password?.message}
        {...register('password')}
      />
      <PasswordInput
        label="Подтвердите пароль"
        placeholder="Введите пароль"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      {errors.root?.message && (
        <div className={authFormStyles.formError}>{errors.root.message}</div>
      )}
      <Button buttonType="button" type="submit" variant="primary" fullWidth>
        Зарегистрироваться
      </Button>
    </form>
  );
};
