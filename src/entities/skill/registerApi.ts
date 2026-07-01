import { injectSkillsApi } from './api/skillsApi';
type SkillsApi = ReturnType<typeof injectSkillsApi>;

let skillsApi: SkillsApi | undefined;

export function registerSkillsApi() {
  if (!skillsApi) {
    skillsApi = injectSkillsApi();
  }
}

function getSkillsApi(): SkillsApi {
  if (!skillsApi) {
    throw new Error(
      'skillsApi не зарегистрирован: вызовите registerSkillsApi() после initSessionTransport().'
    );
  }
  return skillsApi;
}

export function useGetSkillsQuery(...args: Parameters<SkillsApi['useGetSkillsQuery']>) {
  return getSkillsApi().useGetSkillsQuery(...args);
}
