import styles from './QuestionsListPage.module.scss';
import { useEffect, useState } from 'react';
import { QuestionsList } from '@/widgets/QuestionsList/ui/QuestionsList';
import { QuestionsFilters } from '@/widgets/QuestionsFilters/ui/QuestionsFilters';

export const QuestionsListPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showFilters);
    return () => document.body.classList.remove('no-scroll');
  }, [showFilters]);

  return (
    <div className={styles.container}>
      <button className={styles.toggleFilters} onClick={() => setShowFilters((prev) => !prev)}>
        Фильтры
      </button>
      <QuestionsList></QuestionsList>
      <QuestionsFilters
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      ></QuestionsFilters>
    </div>
  );
};
