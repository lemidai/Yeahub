import { injectQuestionsApi } from './api/questionApi';
type QuestionsApi = ReturnType<typeof injectQuestionsApi>;

let questionsApi: QuestionsApi | undefined;

export function registerQuestionsApi() {
  if (!questionsApi) {
    questionsApi = injectQuestionsApi();
  }
}

export function getQuestionsApi(): QuestionsApi {
  if (!questionsApi) {
    throw new Error(
      'questionsApi не зарегистрирован: вызовите registerQuestionsApi() после initSessionTransport().'
    );
  }
  return questionsApi;
}

export function useLazyGetQuestionsQuery(
  ...args: Parameters<QuestionsApi['useLazyGetQuestionsQuery']>
) {
  return getQuestionsApi().useLazyGetQuestionsQuery(...args);
}

export function useGetQuestionsQuery(...args: Parameters<QuestionsApi['useGetQuestionsQuery']>) {
  return getQuestionsApi().useGetQuestionsQuery(...args);
}
