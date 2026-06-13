import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type CreateBaseQueryOptions = {
  getAccessToken?: (state: unknown) => string | null;
};

export const createBaseQuery = (
  options?: CreateBaseQueryOptions
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  return fetchBaseQuery({
    baseUrl: process.env.BASE_API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const accessToken = options?.getAccessToken?.(getState());
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  });
};
