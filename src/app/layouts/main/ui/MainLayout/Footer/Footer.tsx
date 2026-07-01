import styles from './Footer.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { OUTER_LINKS } from '@/shared/config/routes';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <Link to="/">
            <Icon name="logoWhiteText" width={99} height={32} />
          </Link>
          <h3 className={clsx(styles.title)}>Выбери, каким будет IT завтра, вместе с нами!</h3>
          <p className={clsx(styles.description)}>
            YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
            исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
            ознакомления в Figma.
          </p>
        </div>
        <div className={styles.footerExtra}>
          <p>© 2026 YeaHub</p>
          <div className={styles.links}>
            <div className={styles.linksContainer}>
              <a href="/">Документы</a>
              <div className={styles.socials}>
                <a href={OUTER_LINKS.figma} target="_blank" rel="noopener">
                  <Icon name="figma" />
                </a>
                <a href={OUTER_LINKS.telegram} target="_blank" rel="noopener">
                  <Icon name="telegram" />
                </a>
                <a href={OUTER_LINKS.youtube} target="_blank" rel="noopener">
                  <Icon name="youtube" />
                </a>
                <a href={OUTER_LINKS.tiktok} target="_blank" rel="noopener">
                  <Icon name="tiktok" />
                </a>
                <a href={OUTER_LINKS.github} target="_blank" rel="noopener">
                  <Icon name="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};
