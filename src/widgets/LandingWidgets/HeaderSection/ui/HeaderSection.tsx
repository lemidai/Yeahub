import { Button } from '@/shared/ui/Button/Button';
import { Section } from '@/shared/ui/Section/Section';
import styles from './HeaderSection.module.scss';

export const HeaderSection = () => {
  return (
    <Section
      headSection={true}
      title={
        <>
          Сообщество
          <br />
          IT специалистов
        </>
      }
    >
      <div className={styles.container}>
        <p className={styles.description}>
          YeaHub — это не просто платформа, это место, где профессионалы IT-индустрии общаются,
          обмениваются опытом и вдохновляют друг друга на новые достижения.
        </p>
        <Button buttonType="innerLink" to="/auth" variant="primary">
          Присоединиться
        </Button>
        <div></div>
      </div>
    </Section>
  );
};
