import { authFormStyles } from '@/shared/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';
import { useLazyResetPasswordQuery } from '../../api/resetPasswordApi';
import { openModal } from '@/app/store/slices/modalSlice/modalSlice';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/app/store/hooks';
import { resetPasswordFormSchema, resetPasswordFormState } from '../../model/resetPasswordSchema';

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
  const [resetPassword] = useLazyResetPasswordQuery();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: resetPasswordFormState) => {
    const sendLetter = () => resetPassword(data.email).unwrap();
    try {
      await sendLetter();
      dispatch(openModal({ type: 'resetPassword', props: { sendLetter } }));
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
      <form className={authFormStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Почта"
          placeholder="Введите почту"
          error={errors.email?.message}
          {...register('email')}
        />
        {errors.root?.message && (
          <div className={authFormStyles.formError}>{errors.root.message}</div>
        )}
        <Button buttonType="button" type="submit" variant="primary" fullWidth>
          Восстановить пароль
        </Button>
      </form>
    </>
  );
};
