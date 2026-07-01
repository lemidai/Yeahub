import { ROUTES } from '@/shared/config';

export type AuthFormCardVariant = 'login' | 'signUp' | 'resetPassword';

export const AUTH_FORM_PAGE_CONFIG = {
  login: {
    title: 'Вход в личный кабинет',
    footerText: 'Нет аккаунта?',
    footerLinkLabel: 'Зарегистрироваться',
    footerLinkPath: ROUTES.signup,
  },
  signUp: {
    title: 'Регистрация',
    footerText: 'Уже есть аккаунт?',
    footerLinkLabel: 'Войти',
    footerLinkPath: ROUTES.login,
  },
  resetPassword: {
    title: 'Забыли пароль?',
    description:
      'Для восстановления пароля введите адрес эл. почты, на который вы регистрировались. Мы отправим письмо для восстановления пароля.',
    footerText: 'Нет аккаунта?',
    footerLinkLabel: 'Зарегистрироваться',
    footerLinkPath: ROUTES.signup,
  },
} as const;
