import { Skeleton } from '..';
import styles from './AuthFormSkeleton.module.scss';

export type AuthFormSkeletonVariant = 'login' | 'signup' | 'resetPassword';

export type AuthFormSkeletonProps = {
  variant?: AuthFormSkeletonVariant;
};

const FIELD_COUNTS: Record<AuthFormSkeletonVariant, number> = {
  login: 2,
  signup: 4,
  resetPassword: 1,
};

export const AuthFormSkeleton = ({ variant = 'login' }: AuthFormSkeletonProps) => {
  const fieldsCount = FIELD_COUNTS[variant];

  return (
    <div>
      {Array.from({ length: fieldsCount }, (_, index) => (
        <div key={index} className={styles.field}>
          <Skeleton className={styles.label} />
          <Skeleton className={styles.input} />
        </div>
      ))}

      {variant === 'login' && (
        <div className={styles.forgotPassword}>
          <Skeleton className={styles.forgotLink} />
        </div>
      )}
      <div>
        <Skeleton className={styles.button} />
      </div>
    </div>
  );
};
