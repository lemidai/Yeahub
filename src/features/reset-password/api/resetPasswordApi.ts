import { AUTH_PATHS_MAP } from '@/entities/session/model/constants';
import { baseApi } from '@/shared/api/baseApi';

export const resetPasswordApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    resetPassword: build.query({
      query: (email) => ({
        url: AUTH_PATHS_MAP.sendResetPassword,
        params: { email },
      }),
    }),
  }),
});

export const { useLazyResetPasswordQuery } = resetPasswordApi;
