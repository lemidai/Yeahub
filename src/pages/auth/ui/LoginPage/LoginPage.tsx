import styles from './LoginPage.module.scss';
import { LoginFormLazy } from '@/features/login';
import { AuthFormSkeleton } from '@/shared/ui/AuthFormSkeleton/AuhtFormSkeleton';
import { Suspense } from 'react';
import { AuthFormCard } from '@/widgets/AuthFormCard/ui/AuthFormCard';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <AuthFormCard variant="login">
        <Suspense fallback={<AuthFormSkeleton />}>
          <LoginFormLazy />
        </Suspense>
      </AuthFormCard>
    </div>
  );
};
