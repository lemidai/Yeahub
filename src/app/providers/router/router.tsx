import { MainLayout } from '@/app/layouts/main';
import { MainPage } from '@/pages/main';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/main',
        element: <MainPage />,
      },
    ],
  },
]);
