import { AUTH_PATHS_MAP } from '@/entities/session/model/constants';
import { baseApi } from '@/shared/api/baseApi';
import { RegisterRequest } from '../model/types';
import { EnterResponse } from '@/entities/session/model/types';

export const registerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<EnterResponse, RegisterRequest>({
      query: (body) => ({
        url: AUTH_PATHS_MAP.register,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
