import { Icon } from '@/shared/ui';
import styles from './AuthSidebar.module.scss';
import { Link } from 'react-router-dom';
export const AuthSidebar = () => {
  return (
    <div className={styles.authSidebar}>
      <div className={styles.header}>
        <Link to="/">
          <Icon name="logoWhiteTree" size={45} />
          <Icon name="logoWhiteText" width={138} height={45} />
        </Link>
        <p>YeaHub объединяет IT-специалистов</p>
      </div>
      <div className={styles.list}>
        <h4 className={styles.heading}>
          Стань частью сообщества <br /> YeaHub и получи:
        </h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>
              <Icon name="sidebarListIcon" size={18} />
            </span>
            Пошаговый план обучения
          </li>
          <li className={styles.listItem}>
            <span>
              <Icon name="sidebarListIcon" size={18} />
            </span>
            Карьерный рост
          </li>
          <li className={styles.listItem}>
            <span>
              <Icon name="sidebarListIcon" size={18} />
            </span>
            Большое сообщество специалистов
          </li>
          <li className={styles.listItem}>
            <span>
              <Icon name="sidebarListIcon" size={18} />
            </span>
            Обучение с ментором
          </li>
          <li className={styles.listItem}>
            <span>
              <Icon name="sidebarListIcon" size={18} />
            </span>
            Возможность прохождения стажировки
          </li>
        </ul>
      </div>
    </div>
  );
};
