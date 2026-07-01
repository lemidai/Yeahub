import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/main';
import { AuthLayout } from '@/app/layouts/auth';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { LoginPage, SignUpPage, ResetPasswordPage } from '@/pages/auth';
import { MainPage, QuestionsListPage } from '@/pages/main';
import { ProfilePage } from '@/pages/profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicRoute />,
    children: [
      {
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
            path: '/auth/signup',
            element: <SignUpPage />,
          },
          {
            path: '/auth/resetPassword',
            element: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <MainLayout />,
        children: [
          {
            path: '/profile',
            element: <ProfilePage />,
          },
          {
            path: '/questions',
            element: <QuestionsListPage />,
          },
        ],
      },
    ],
  },
]);
