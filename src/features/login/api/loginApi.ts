import { baseApi } from '@/shared/api/baseApi';
import { AuthResponse } from '@/entities/session/model/types';
import { LoginRequest } from '../model/types';
import { AUTH_PATHS_MAP } from '@/entities/session/model/constants';
import { setSession } from '@/entities/session';

export const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: AUTH_PATHS_MAP.login,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setSession(data));
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
