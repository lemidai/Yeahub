import { ChooseSpecialization } from './ChooseSpecialization/ChooseSpecialization';
import { LandingSection } from './HeadSection/HeadSection';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.content}>
      <LandingSection />
      <ChooseSpecialization />
    </div>
  );
};
