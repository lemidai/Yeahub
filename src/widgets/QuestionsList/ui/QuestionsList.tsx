import styles from './QuestionsList.module.scss';
import { QuestionsCard } from '@/entities/question/ui/QuestionCard';
import { useQuestionsList } from '../model/hooks/useQuestionsList';

export const QuestionsList = () => {
  const { data, hasMore, isFetching, isLoading, loaderRef, questions } = useQuestionsList();

  return (
    <div className={styles.questionsContainer}>
      <p className={styles.title}>Вопросы с собеседований</p>
      {isLoading && !data ? (
        <div>Загрузка...</div>
      ) : data.total > 0 ? (
        <>
          <ul className={styles.questionsList}>
            {questions.map((question) => (
              <li className={styles.question} key={question.id}>
                <QuestionsCard data={question} />
              </li>
            ))}
          </ul>

          {isFetching && data && <div>Подгружаем ещё...</div>}

          {hasMore && <div ref={loaderRef} style={{ height: 1 }} />}
        </>
      ) : (
        <div className={styles.noQuestions}>
          <p className={styles.noQuestionsText}>К сожалению, по запросу ничего не найдено.</p>
          <p>Попробуйте изменить запрос или воспользуйтесь нашими категориями.</p>
        </div>
      )}
    </div>
  );
};
