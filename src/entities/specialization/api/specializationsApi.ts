import { baseApi } from '@/shared/api/baseApi';
import { GetSpecializationsResponse, Specialization } from '../model/types';

const SPECIALIZATIONS_PATH = '/specializations';

export function injectSpecializationsApi() {
  if (!baseApi) {
    throw new Error(
      'baseApi не проинициализирован: сначала вызовите initSessionTransport() в app/store/initAppStore.'
    );
  }

  return baseApi.injectEndpoints({
    endpoints: (build) => ({
      getSpecialization: build.query<Specialization[], void>({
        query: () => ({
          url: SPECIALIZATIONS_PATH,
        }),
        transformResponse: (response: GetSpecializationsResponse) => response.data,
      }),
    }),
  });
}
