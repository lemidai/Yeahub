import styles from './SingUpPage.module.scss';
import { AuthFormSkeleton } from '@/shared/ui/AuthFormSkeleton/AuhtFormSkeleton';
import { Suspense } from 'react';
import { SignUpFormLazy } from '@/features/signUp';
import { AuthFormCard } from '@/widgets/AuthFormCard/ui/AuthFormCard';

export const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <AuthFormCard variant="signUp">
        <Suspense fallback={<AuthFormSkeleton />}>
          <SignUpFormLazy />
        </Suspense>
      </AuthFormCard>
    </div>
  );
};
