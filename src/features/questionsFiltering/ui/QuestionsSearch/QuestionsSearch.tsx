import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Input } from '@/shared/ui';
import { setTitleOrDescription } from '@/features/questionsFiltering/model/questionsFiltersSlice';

export const QuestionsSearch = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.filters.titleOrDescription);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setTitleOrDescription(localValue));
    }, 500);

    return () => clearTimeout(handler);
  }, [localValue, dispatch]);

  return (
    <Input
      onChange={(e) => setLocalValue(e.target.value)}
      type="text"
      placeholder="Введите вопрос"
      value={localValue}
    />
  );
};
