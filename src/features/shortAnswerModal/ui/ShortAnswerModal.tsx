import styles from './ShortAnswerModal.module.scss';
import { Question } from '@/entities/question/model/types';
import { Link } from 'react-router-dom';
import Vector from '@shared/assets/navigation/Vector.svg';
import { useAppDispatch } from '@/app/store/hooks';
import { closeModal } from '@/app/store/slices/modalSlice/modalSlice';
import { RenderHtmlContent } from '@/shared/ui';

interface ShortAnswerModalProps {
  data: Question;
}

export const ShortAnswerModal = ({ data }: ShortAnswerModalProps) => {
  const dispatch = useAppDispatch();

  const { title, shortAnswer, rate, complexity } = data;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className={styles.content}>
      <p className={styles.shortAnswerTitle}>{title}</p>
      <div className={styles.propsWrapper}>
        <ul className={styles.propsList}>
          <li className={styles.prop}>
            <p className={styles.propTitle}>Рейтинг:</p>
            <span className={styles.propValue}>{rate}</span>
          </li>
          <li className={styles.prop}>
            <p className={styles.propTitle}>Сложность:</p>
            <span className={styles.propValue}>{complexity}</span>
          </li>
        </ul>
      </div>
      <RenderHtmlContent htmlContent={shortAnswer} />
      <Link className={styles.fullAnswerLink} to="/profile" onClick={handleCloseModal}>
        Подробнее
        <Vector className={styles.vector} />
      </Link>
    </div>
  );
};
