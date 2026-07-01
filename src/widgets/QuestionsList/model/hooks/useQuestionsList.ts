import { useAppDispatch, useAppSelector } from '@/app/store';
import { buildQuestionsParams } from '@/entities/question/lib/buildQuestionsParams';
import { Question } from '@/entities/question/model/types';
import { useGetQuestionsQuery } from '@/entities/question/registerApi';
import {
  QUESTION_FILTERS_SLICE_KEY,
  setPage,
} from '@/features/questionsFiltering/model/questionsFiltersSlice';
import { useCallback, useEffect, useMemo } from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';

export const useQuestionsList = () => {
  const filters = useAppSelector((state) => state[QUESTION_FILTERS_SLICE_KEY]);
  const dispatch = useAppDispatch();

  const page = filters.page;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [
    filters.specializations,
    filters.skills,
    filters.skillFilterMode,
    filters.complexity,
    filters.rate,
    filters.titleOrDescription,
  ]);

  const queryParams = useMemo(() => {
    return {
      ...buildQuestionsParams(filters),
      page,
    };
  }, [filters, page]);

  const { data, isFetching, isLoading } = useGetQuestionsQuery(queryParams);
  const questions: Question[] = data?.data ?? [];
  const hasMore = data ? data.data.length < data.total : false;

  const loadMore = useCallback(() => {
    dispatch(setPage(page + 1));
  }, [dispatch, page]);

  const loaderRef = useInfiniteScroll({
    enabled: hasMore && !isFetching,
    onLoadMore: loadMore,
  });

  return {
    questions,
    data,
    isLoading,
    isFetching,
    hasMore,
    loaderRef,
  };
};
