import { injectSpecializationsApi } from './api/specializationsApi';
type SpecializationsApi = ReturnType<typeof injectSpecializationsApi>;

let specializationsApi: SpecializationsApi | undefined;

export function registerSpecializationsApi() {
  if (!specializationsApi) {
    specializationsApi = injectSpecializationsApi();
  }
}

function getSpecializationsApi(): SpecializationsApi {
  if (!specializationsApi) {
    throw new Error(
      'specializationsApi не зарегистрирован: вызовите registerSpecializationsApi() после initSessionTransport().'
    );
  }
  return specializationsApi;
}

export function useGetSpecializationQuery(
  ...args: Parameters<SpecializationsApi['useGetSpecializationQuery']>
) {
  return getSpecializationsApi().useGetSpecializationQuery(...args);
}
