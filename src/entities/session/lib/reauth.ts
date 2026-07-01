import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { AUTH_PATHS, AUTH_PATHS_MAP } from '../model/constants';
import { removeSession, setSession } from '../model/sessionSlice';
import { AuthResponse } from '../model/types';

type FetchArgsType = {
  url: string;
};

const extractUrl = (url: string | FetchArgsType) => {
  return typeof url === 'string' ? url : url.url;
};

export const withReauth = (
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  return async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status !== 401) {
      return result;
    }

    const url = extractUrl(args);
    if (AUTH_PATHS.some((path) => url.endsWith(path))) {
      return result;
    }

    try {
      const refreshResult = await baseQuery(
        {
          url: AUTH_PATHS_MAP.refresh,
          method: 'GET',
        },
        api,
        extraOptions
      );

      if (refreshResult.error) {
        throw new Error('Обновление токена не удалось');
      }

      const accessToken = (refreshResult.data as AuthResponse | undefined)?.access_token;
      if (accessToken) {
        throw new Error('Токен доступа отсутствует');
      }

      api.dispatch(setSession({ accessToken: accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } catch {
      api.dispatch(removeSession());
    }

    return result;
  };
};
