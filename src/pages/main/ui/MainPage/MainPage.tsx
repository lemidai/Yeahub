import { ChooseSpecialization } from './ChooseSpecialization/ChooseSpecialization';
import { LandingSection } from './HeadSection/HeadSection';
import styles from './MainPage.module.scss';

//Запутался много нервов потратил, решил сделать авторизацию и список. Логики никакой нет можно не смотреть
export const MainPage = () => {
  return (
    <div className={styles.content}>
      <LandingSection />
      <ChooseSpecialization />
    </div>
  );
};
