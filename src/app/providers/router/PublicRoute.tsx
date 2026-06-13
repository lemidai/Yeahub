import { useAppSelector } from '@/app/store/store';
import { selectAccessToken } from '@/entities/session/model/selectors';
import { ROUTES } from '@/shared/config';
import {} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const isAuth = useAppSelector(selectAccessToken);

  if (isAuth) {
    return <Navigate to={ROUTES.home} replace />;
  }
  return <Outlet />;
};
