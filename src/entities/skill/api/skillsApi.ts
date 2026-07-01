import { baseApi } from '@/shared/api/baseApi';
import { GetSkillsResponse, Skill } from '../model/types';

const SKILLS_PATH = '/skills';

export function injectSkillsApi() {
  if (!baseApi) {
    throw new Error(
      'baseApi не проинициализирован: сначала вызовите initSessionTransport() в app/store/initAppStore.'
    );
  }

  return baseApi.injectEndpoints({
    endpoints: (build) => ({
      getSkills: build.query<Skill[], void>({
        query: () => ({
          url: SKILLS_PATH,
          params: { limit: 12 },
        }),
        transformResponse: (response: GetSkillsResponse) => response.data,
      }),
    }),
  });
}
