import { initBaseApi } from '@/shared/api/baseApi';
import { createBaseQuery } from '@/shared/api/baseQuery'; //не выполняется
import { withReauth } from './reauth';
import { selectAccessToken, StateWithSession } from '../model/selectors';
export function initSessionTransport(): void {
  const baseQuery = createBaseQuery({
    getAccessToken: (state) => selectAccessToken(state as StateWithSession),
  });

  initBaseApi(withReauth(baseQuery));
}
