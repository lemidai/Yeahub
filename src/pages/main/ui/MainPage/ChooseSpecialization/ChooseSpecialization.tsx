import styles from './ChooseSpecialization.module.scss';
import {
  SpecializationCard,
  useGetSpecializationQuery,
  Specialization,
} from '@/entities/specialization';
import { ROUTES } from '@/shared/config';

export const ChooseSpecialization = () => {
  const { data: specializations = [] } = useGetSpecializationQuery();
  return (
    <div className={styles.container}>
      <h2 className={styles.chooseSpecTitle}>Выберите свою специальность</h2>
      <ul className={styles.specializationsList}>
        {specializations.map((spec: Specialization) => (
          <li key={spec.id}>
            <SpecializationCard
              title={spec.title}
              description={spec.description}
              path={ROUTES.questions}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
