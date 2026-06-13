// import { setToken } from '@/entities/session/model/sessionSlice';
// import { EnterResponse } from '@/entities/session/model/types';
// import { useLoginMutation } from '../api/loginApi';
// import { Input } from '@/shared/ui/Input/Input';
// import { Button } from '@/shared/ui/Button/Button';
// import { Controller, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import z from 'zod';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '@/app/store/store';
// import { isFetchBaseQueryError, isSerializedError } from '@/shared/api/types';
// import { fields } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';

// const emailSchema = z.email('Неверный фомат почты');
// const passwordSchema = z
//   .string()
//   .min(8, 'Минимум 8 символов')
//   .regex(/[A-Z]/, 'Нужна хотя бы одна заглавная буква')
//   .regex(/[0-9]/, 'Нужна хотя бы одна цифра')
//   .regex(/[!@#$%^&*()_+{}[\]:;,.?\\/-]/, 'Нужен хотя бы один спецсимвол');

// const loginFormSchema = z.object({
//   email: emailSchema,
//   password: passwordSchema,
// });

// type FormState = z.input<typeof loginFormSchema>;

// export const LoginFormRHFZod = () => {
//   const {
//     register,
//     setError,
//     control,
//     clearErrors,
//     handleSubmit,
//     formState: { errors, touchedFields },
//   } = useForm({
//     resolver: zodResolver(loginFormSchema),
//     mode: 'onSubmit',
//     reValidateMode: 'onChange',
//   });
//   const [login, { isLoading }] = useLoginMutation();
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   // const { errors } = formState;

//   const onSubmit = async (data: FormState) => {
//     console.log(data);
//     try {
//       const token = await login({
//         username: data.email,
//         password: data.password,
//       }).unwrap();
//       dispatch(setToken(token));
//       navigate('/profile');
//     } catch (error) {
//       if (isFetchBaseQueryError(error)) {
//         if (error.status === 401) {
//           setError('root', {
//             type: 'server',
//             message: 'Неверные почта или пароль',
//           });
//         } else if (isSerializedError(error)) {
//           setError('root', {
//             type: 'serialized',
//             message: error.message,
//           });
//         } else {
//           setError('root', {
//             type: 'unknown',
//             message: `Неизвестная ошибка`,
//           });
//         }
//       }
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h3 style={{ textAlign: 'center' }}>REACT HOOK FORM + ZOD</h3>
//       {/* <Input
//         placeholder="Введите почту"
//         label="Почта"
//         // onChange={(e) => clearErrors('email')}
//         error={errors.email?.message}
//         {...register('email')}
//       />
//       <Input
//         placeholder="Введите пароль"
//         label="Пароль"
//         error={errors.password?.message}
//         {...register('password')}
//       /> */}
//       <Controller
//         name="email"
//         control={control}
//         render={({ field, fieldState }) => {
//           const showError = fieldState.error && fieldState.isDirty; // или isTouched
//           return (
//             <Input
//               placeholder="Введите почту"
//               label="Почта"
//               {...field}
//               // error={fieldState.error?.message}
//               error={showError ? fieldState.error?.message : undefined}
//             />
//           );
//         }}
//       />
//       <Controller
//         name="password"
//         control={control}
//         render={({ field, fieldState }) => (
//           <Input
//             placeholder="Введите пароль"
//             label="Пароль"
//             {...field}
//             error={fieldState.error?.message}
//             onChange={(e) => {
//               field.onChange(e);
//               clearErrors('password');
//             }}
//           />
//         )}
//       />
//       {/* {errors.root?.message && <div>{errors.root.message}</div>} */}
//       <Button buttonType="button" variant="primary" fullWidth>
//         Вход
//       </Button>
//     </form>
//   );
// };
