import { createApi } from '@reduxjs/toolkit/query/react';
import { API_REDUCER_PATH } from './constants';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const createAppBaseApi = (
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
) => {
  return createApi({
    reducerPath: API_REDUCER_PATH,
    baseQuery,
    endpoints: () => ({}),
  });
};
export let baseApi!: ReturnType<typeof createAppBaseApi>;
export const initBaseApi = (
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
) => {
  if (!baseApi) {
    baseApi = createAppBaseApi(baseQuery);
  }
  return baseApi;
};
