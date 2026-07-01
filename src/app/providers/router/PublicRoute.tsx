import { useAppSelector } from '@/app/store';
import { selectAccessToken } from '@/entities/session/model/selectors';
import { ROUTES } from '@/shared/config';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const isAuth = useAppSelector(selectAccessToken);

  if (isAuth) {
    return <Navigate to={ROUTES.profile} replace />;
  }
  return <Outlet />;
};
