import styles from './QuestionsFilters.module.scss';
import React from 'react';
import clsx from 'clsx';
import { QuestionsSearch } from '@/features/questionsFiltering/';
import { Filter } from '@/features/questionsFiltering/ui/Filter/Filter';
import { useQuestionFiltersConfig } from '@/features/questionsFiltering/lib/useQuestionFiltersConfig';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';

interface Props {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuestionsFilters = ({ showFilters, setShowFilters }: Props) => {
  const filters = useQuestionFiltersConfig();
  const filtersRef = useClickOutside<HTMLDivElement>(() => setShowFilters(false), {
    enabled: showFilters,
  });

  return (
    <div ref={filtersRef} className={clsx(styles.filtersContainer, showFilters && styles.isOpen)}>
      <div className={styles.wrapper}>
        {showFilters && (
          <button className={styles.closeFilters} onClick={() => setShowFilters(false)}>
            X
          </button>
        )}
        <QuestionsSearch />
        {filters.map((filter) => (
          <Filter
            key={filter.title}
            title={filter.title}
            list={filter.list}
            selector={filter.selector}
            action={filter.action}
          />
        ))}
      </div>
    </div>
  );
};
