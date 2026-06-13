import { baseApi } from '@/shared/api/baseApi';
import { EnterResponse, LogoutResponse } from '../model/types';

export function injectSessionApi() {
  if (!baseApi) {
    throw new Error(
      'baseApi не проинициализирован: сначала вызовите initSessionTransport() в app/store/initAppStore.'
    );
  }

  return baseApi.injectEndpoints({
    endpoints: (build) => ({
      // login: build.mutation({
      //   query: (body) => ({
      //     url: '/auth/login',
      //     method: 'POST',
      //     body,
      //   }),
      // }),
      refresh: build.query<EnterResponse, void>({
        query: () => ({
          url: '/auth/refresh',
          method: 'GET',
        }),
      }),
      logout: build.query<LogoutResponse, void>({
        query: () => ({
          url: '/auth/logout',
          method: 'GET',
        }),
      }),
    }),
  });
}
