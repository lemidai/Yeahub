import { baseApi } from '@/shared/api/baseApi';
import { GetQuestionsResponse } from '../model/types';

const QUESTIONS_PATH = '/questions';

type GetQuestionRequest = {
  page: number;
  specializations?: number[];
  limit?: number;
  skills?: number[];
  rate?: number[];
  complexity?: number[];
  titleOrDescription?: string;
};

export function injectQuestionsApi() {
  if (!baseApi) {
    throw new Error(
      'baseApi не проинициализирован: сначала вызовите initSessionTransport() в app/store/initAppStore.'
    );
  }

  return baseApi.injectEndpoints({
    endpoints: (build) => ({
      getQuestions: build.query<GetQuestionsResponse, GetQuestionRequest>({
        query: (params) => ({
          url: QUESTIONS_PATH,
          params,
        }),
        serializeQueryArgs: ({ endpointName, queryArgs }) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { page, ...filters } = queryArgs;
          return {
            endpointName,
            ...filters,
          };
        },
        merge: (currentCache, newItems, { arg }) => {
          const isLastPage = newItems.data.length < (arg.limit ?? 30);

          if (arg.page === 1) {
            currentCache.data = newItems.data;
            currentCache.page = newItems.page;
            currentCache.limit = newItems.limit;
            currentCache.total = newItems.total;
            currentCache.isLastPage = isLastPage;
            return;
          }

          currentCache.data.push(...newItems.data);
          currentCache.page = newItems.page;
          currentCache.limit = newItems.limit;
          currentCache.total = newItems.total;
          currentCache.isLastPage = isLastPage;
        },

        forceRefetch({ currentArg, previousArg }) {
          return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
        },
      }),
    }),
  });
}
