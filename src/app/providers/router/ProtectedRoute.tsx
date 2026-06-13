import { useAppSelector } from '@/app/store/store';
import { selectIsAuthenticated } from '@/entities/session/model/selectors';
import { ROUTES } from '@/shared/config';
import {} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const isAuth = useAppSelector(selectIsAuthenticated);

  if (!isAuth) {
    return <Navigate to={ROUTES.login} />;
  }
  return <Outlet />;
};
