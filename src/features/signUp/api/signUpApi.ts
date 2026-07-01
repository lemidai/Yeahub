import { AUTH_PATHS_MAP } from '@/entities/session/model/constants';
import { baseApi } from '@/shared/api/baseApi';
import { SignUpRequest } from '../model/types';
import { AuthResponse } from '@/entities/session/model/types';

export const signUpApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AuthResponse, SignUpRequest>({
      query: (body) => ({
        url: AUTH_PATHS_MAP.signUp,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = signUpApi;
