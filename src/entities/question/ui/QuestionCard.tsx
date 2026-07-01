import styles from './QuestionCard.module.scss';
import { useAppDispatch } from '@/app/store/hooks';
import { openModal } from '@/app/store/slices/modalSlice/modalSlice';
import { Question } from '../model/types';

type Props = {
  data: Question;
};

export const QuestionsCard = ({ data }: Props) => {
  const { title } = data;
  const dispatch = useAppDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ type: 'shortAnswer', props: { data } }));
  };
  return (
    <div className={styles.container} onClick={handleOpenModal}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
