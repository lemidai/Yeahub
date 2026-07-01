import { baseApi } from '@/shared/api/baseApi';
import { AuthResponse, LogoutResponse } from '../model/types';
import { AUTH_PATHS_MAP } from '../model/constants';
import { removeSession } from '../model/sessionSlice';

export function injectSessionApi() {
  if (!baseApi) {
    throw new Error(
      'baseApi не проинициализирован: сначала вызовите initSessionTransport() в app/store/initAppStore.'
    );
  }

  return baseApi.injectEndpoints({
    endpoints: (build) => ({
      refresh: build.query<AuthResponse, void>({
        query: () => ({
          url: AUTH_PATHS_MAP.refresh,
          method: 'GET',
        }),
      }),
      logout: build.query<LogoutResponse, void>({
        query: () => ({
          url: AUTH_PATHS_MAP.logout,
          method: 'GET',
        }),
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
          } finally {
            dispatch(removeSession());
          }
        },
      }),
    }),
  });
}
