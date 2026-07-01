import styles from './AuthFormCard.module.scss';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { AUTH_FORM_PAGE_CONFIG, AuthFormCardVariant } from '../model/cardConfig';

interface Props {
  children: ReactNode;
  variant: AuthFormCardVariant;
}

export const AuthFormCard = ({ children, variant }: Props) => {
  const pageConfig = AUTH_FORM_PAGE_CONFIG[variant];
  return (
    <section className={styles.section}>
      <h1 className={styles.cardTitle}>{pageConfig.title}</h1>
      <div className={styles.content}>{children}</div>
      <footer className={styles.cardFooter}>
        <p>{pageConfig.footerText}</p>
        <Link to={pageConfig.footerLinkPath} className={styles.link}>
          {pageConfig.footerLinkLabel}
        </Link>
      </footer>
    </section>
  );
};
