import styles from './ResetPasswordPage.module.scss';
import { Suspense } from 'react';
import { AuthFormSkeleton } from '@/shared/ui/AuthFormSkeleton/AuhtFormSkeleton';
import { ResetPasswordFormLazy } from '@/features/reset-password';
import { AuthFormCard } from '@/widgets/AuthFormCard/ui/AuthFormCard';

export const ResetPasswordPage = () => {
  return (
    <div className={styles.container}>
      <AuthFormCard variant="resetPassword">
        <Suspense fallback={<AuthFormSkeleton />}>
          <ResetPasswordFormLazy />
        </Suspense>
      </AuthFormCard>
    </div>
  );
};
