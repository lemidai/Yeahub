import { Icon } from '@/shared/ui/Icon/Icon';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerMain}>
          <Link to="/">
            {/* надо попробовать добавить логику для вычисления второго размера на основе первого если не квадратная */}
            <Icon name="logoTextWhite" width={99} height={32} />
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
                <a
                  href="https://www.figma.com/community/file/1438482355619792777/yeahub-public"
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="figma" />
                </a>
                <a href="https://t.me/yeahub" target="_blank" rel="noopener">
                  <Icon name="telegram" />
                </a>
                <a href="https://www.youtube.com/@yeahub" target="_blank" rel="noopener">
                  <Icon name="youtube" />
                </a>
                <a href="https://www.tiktok.com/@yeahub%5C_it" target="_blank" rel="noopener">
                  <Icon name="tiktok" />
                </a>
                <a
                  href="https://github.com/YeaHubTeam/yeahub-platform"
                  target="_blank"
                  rel="noopener"
                >
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
