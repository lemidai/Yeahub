import { MainLayout } from '@/app/layouts/main';
import { MainPage } from '@/pages/main';
import { AuthLayout } from '@/app/layouts/auth';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, RegisterPage } from '@/pages/auth';
import { ProfilePage } from '@/pages/profile/ui/ProfilePage/ProfilePage';
import { ResetPasswordPage } from '@/pages/auth/ui/ResetPasswordPage/ResetPasswordPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: '/auth/register',
        element: <RegisterPage />,
      },
      {
        path: '/auth/resetPassword',
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: '/profile',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
    ],
  },
]);
