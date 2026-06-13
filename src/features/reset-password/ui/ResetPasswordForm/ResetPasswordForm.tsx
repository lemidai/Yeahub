import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/store/store';
import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';
import { useLazyResetPasswordQuery } from '../../api/resetPasswordApi';
import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';

const emailSchema = z.email('Неверный фомат почты');
const resetPasswordFormSchema = z.object({
  email: emailSchema,
});

type resetPasswordFormState = z.input<typeof resetPasswordFormSchema>;

export const ResetPasswordForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const [resetPassword, { isLoading }] = useLazyResetPasswordQuery();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data: resetPasswordFormState) => {
    try {
      const token = await resetPassword(data.email).unwrap();
      setIsOpen(true);
      // navigate('/');
      // alert(token.message);
      // alert('Письмо отправлено на почту');
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (error.status === 403) {
          setError('root', {
            type: 'server',
            message: 'Отправка письма временно недоступна. Попробуйте позже.',
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: 'center' }}>REACT HOOK FORM + ZOD</h3>
        <Input
          label="Почта"
          placeholder="Введите почту"
          error={errors.email?.message}
          {...register('email')}
        />
        {errors.root?.message && <div>{errors.root.message}</div>}
        <Button buttonType="button" type="submit" variant="primary" fullWidth>
          Восстановить пароль
        </Button>
      </form>
    </>
  );
};
