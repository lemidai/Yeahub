import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setBootstrapped, setSession } from '@/entities/session/model/sessionSlice';
import { useLazyRefreshQuery } from '@/entities/session/registerApi';

type BootstrapType = {
  children: ReactNode;
};

export const Bootstrap = ({ children }: BootstrapType) => {
  const dispatch = useAppDispatch();
  const isBootstrapped = useAppSelector((state) => state.session.isBootstrapped);
  const isAuthenticated = useAppSelector((state) => Boolean(state.session.accessToken));
  const [refresh] = useLazyRefreshQuery();

  useEffect(() => {
    if (isBootstrapped) {
      return;
    }
    if (isAuthenticated) {
      dispatch(setBootstrapped());
      return;
    }

    let cancelled = false;

    refresh()
      .unwrap()
      .then((data) => {
        if (!cancelled) {
          dispatch(setSession(data));
        }
      })
      .catch(() => {
        if (!cancelled) {
          dispatch(setBootstrapped());
        }
      });

    return () => {
      cancelled = true;
    };
  }, [dispatch, isAuthenticated, isBootstrapped, refresh]);

  return children;
};
