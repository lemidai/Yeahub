import { FiltersState } from '@/features/questionsFiltering';

export const buildQuestionsParams = (filters: FiltersState) => {
  const params: Partial<FiltersState> = {
    limit: filters.limit,
  };

  if (filters.specializations.length > 0) {
    params.specializations = filters.specializations;
  }

  if (filters.skills.length > 0) {
    params.skills = filters.skills;
    params.skillFilterMode = filters.skillFilterMode;
  }

  if (filters.complexity.length > 0) {
    params.complexity = filters.complexity;
  }

  if (filters.rate.length > 0) {
    params.rate = filters.rate;
  }

  if (filters.titleOrDescription) {
    params.titleOrDescription = filters.titleOrDescription;
  }

  return params;
};
