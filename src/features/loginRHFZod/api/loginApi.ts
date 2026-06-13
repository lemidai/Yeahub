import { AUTH_PATHS_MAP } from '@/entities/session/model/constants';
import { EnterResponse } from '@/entities/session/model/types';
import { baseApi } from '@/shared/api/baseApi';
import { LoginRequest } from '../model/types';

export const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<EnterResponse, LoginRequest>({
      query: (body) => ({
        url: AUTH_PATHS_MAP.login,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
