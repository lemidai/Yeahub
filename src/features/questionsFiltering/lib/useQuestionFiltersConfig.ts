import { useGetSkillsQuery } from '@/entities/skill';
import { useGetSpecializationQuery } from '@/entities/specialization';
import { complexityList, rateList } from '../model/constants';
import {
  selectSpecializations,
  selectSkills,
  selectComplexity,
  selectRates,
} from '@/features/questionsFiltering/model/selectors';
import {
  setSpecializations,
  setSkills,
  setComplexity,
  setRating,
} from '@/features/questionsFiltering/model/questionsFiltersSlice';

export const useQuestionFiltersConfig = () => {
  const { data: specializations = [] } = useGetSpecializationQuery();
  const { data: skills = [] } = useGetSkillsQuery();

  return [
    {
      title: 'Специализация',
      list: specializations,
      selector: selectSpecializations,
      action: setSpecializations,
    },
    {
      title: 'Навыки',
      list: skills,
      selector: selectSkills,
      action: setSkills,
    },
    {
      title: 'Сложность',
      list: complexityList,
      selector: selectComplexity,
      action: setComplexity,
    },
    {
      title: 'Рейтинг',
      list: rateList,
      selector: selectRates,
      action: setRating,
    },
  ];
};
