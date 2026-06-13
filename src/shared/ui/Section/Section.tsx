import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface Props {
  title: string | ReactNode;
  className?: string;
  children: ReactNode;
  titleSize?: 'small' | 'large';
  headSection: boolean;
}

export const Section = ({ title, className, children, headSection }: Props) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {title && (
          <h2 className={`${styles.title} ${headSection ? styles.headSection : ''}`}>{title}</h2>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};
