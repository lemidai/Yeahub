import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';

type FormState = {
  email: string;
  password: string;
};

export const Form = () => {
  const { register, formState } = useForm<FormState>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <form>
      <input type="text" {...register('email')} />
      <input type="text" {...register('password')} />
    </form>
  );
};
