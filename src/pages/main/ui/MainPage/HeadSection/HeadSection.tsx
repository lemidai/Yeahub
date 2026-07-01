import styles from './HeadSection.module.scss';
import { Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

export const LandingSection = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>
          Сообщество <br /> IT специалистов
        </h1>
        <p className={styles.description}>
          YeaHub — это не просто платформа, это место, <br className={styles.mobileBreak} /> где
          профессионалы <br className={styles.desktopBreak} /> IT-индустрии общаются,
          <br className={styles.mobileBreak} /> обмениваются опытом и вдохновляют
          <br className={styles.desktopBreak} /> друг <br className={styles.mobileBreak} /> друга на
          новые достижения.
        </p>
        <Button
          buttonType="innerLink"
          className={styles.sectionButton}
          variant="primary"
          to={ROUTES.login}
        >
          Присоединиться
        </Button>
      </div>
    </section>
  );
};
