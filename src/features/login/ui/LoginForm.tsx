import { authFormStyles } from '@/shared/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { FormState, loginFormSchema } from '../model/loginSchema';
import { useLoginMutation } from '../api/loginApi';
import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PasswordInput } from '@/shared/ui/PasswordInput/PasswordInput';

export const LoginForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FormState) => {
    try {
      await login({
        username: data.email,
        password: data.password,
      }).unwrap();
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
    <form className={authFormStyles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Почта"
        placeholder="Введите почту"
        error={errors.email?.message}
        {...register('email', {
          onChange: () => clearErrors('root'),
        })}
      />
      <PasswordInput
        label="Пароль"
        placeholder="Введите пароль"
        error={errors.password?.message}
        {...register('password', {
          onChange: () => clearErrors('root'),
        })}
      />
      {errors.root?.message && (
        <div className={authFormStyles.formError}>{errors.root.message}</div>
      )}
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
