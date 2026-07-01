import { Button } from '@/shared/ui';
import styles from './SpecializationCard.module.scss';
import { useState } from 'react';
import ArrowDownIcon from '@shared/assets/navigation/Vector2.svg';
import clsx from 'clsx';

type Props = {
  title: string;
  description: string;
  path: string;
};

export const SpecializationCard = ({ title, description, path }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.specTextWrapper}>
        <h3 className={styles.specCardTitle}>{title}</h3>
        <p className={clsx(styles.specCardDescription, isExpanded && styles.expanded)}>
          {description}
        </p>
        <button className={styles.expandTextButton} onClick={() => setExpanded((prev) => !prev)}>
          <ArrowDownIcon className={clsx(styles.arrowIcon, isExpanded && styles.arrowUpIcon)} />
        </button>
      </div>
      <Button buttonType="innerLink" to={path} variant="primary" className={styles.specCardButton}>
        Перейти к вопросам
      </Button>
    </div>
  );
};
