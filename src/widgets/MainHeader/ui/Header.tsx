import styles from './Header.module.scss';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import DefaultAvatar from '@shared/assets/navigation/DefaultAvatar.svg';
import ArrowDownIcon from '@shared/assets/navigation/Vector2.svg';

export const Header = () => {
  const isAuth = useAppSelector((state) => state.session.accessToken);
  const UserAvatar = useAppSelector((state) => state.session.userData?.avatarUrl);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const navButtonRef = useRef<HTMLButtonElement>(null);
  const authButtonRef = useRef<HTMLButtonElement>(null);

  const closeNav = () => setOpenPopover((prev) => (prev === 'nav' ? null : prev));
  const closeAuth = () => setOpenPopover((prev) => (prev === 'auth' ? null : prev));

  const navPopoverRef = useClickOutside<HTMLDivElement>(closeNav, {
    ignoreRefs: [navButtonRef],
  });
  const authPopoverRef = useClickOutside<HTMLDivElement>(closeAuth, {
    ignoreRefs: [authButtonRef],
  });

  const togglePopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const popoverId = e.currentTarget.dataset.popoverId ?? null;
    setOpenPopover(openPopover === popoverId ? null : popoverId);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to={ROUTES.home}>
          <Icon name="logoBlackText" width={115} />
        </Link>
        <div className={styles.navigation}>
          <div className={styles.navList}>
            <Link to={ROUTES.questions}>База вопросов</Link>
            <Link to={ROUTES.questions}>Тренажер</Link>
            <Link to={ROUTES.questions}>Материалы</Link>
          </div>
          <button
            className={styles.togglePopover}
            ref={navButtonRef}
            data-popover-id="nav"
            onClick={togglePopover}
          >
            Подготовка
            <ArrowDownIcon className={clsx(openPopover === 'nav' && styles.arrowIcon)} />
          </button>
          <div
            className={clsx(
              styles.popover,
              styles.navPopover,
              openPopover === 'nav' && styles.isOpen
            )}
            ref={navPopoverRef}
          >
            <div className={styles.popoverOption}>
              <Link to={ROUTES.questions}>База вопросов</Link>
            </div>
            <div className={styles.popoverOption}>
              <Link to={ROUTES.questions}>Тренажер</Link>
            </div>
            <div className={styles.popoverOption}>
              <Link to={ROUTES.questions}>Материалы</Link>
            </div>
          </div>
        </div>
        {isAuth ? (
          <Link to={ROUTES.profile}>
            {UserAvatar ? <img src={UserAvatar} alt="Аватар" /> : <DefaultAvatar />}
          </Link>
        ) : (
          <div className={styles.auth}>
            <div className={styles.authList}>
              <Button buttonType="innerLink" to={ROUTES.login} variant="secondary">
                Вход
              </Button>
              <Button buttonType="innerLink" to={ROUTES.signup} variant="primary">
                Регистрация
              </Button>
            </div>
            <button
              className={styles.togglePopover}
              ref={authButtonRef}
              data-popover-id="auth"
              onClick={togglePopover}
            >
              <Icon name="burger" size={32} />
            </button>
            <div
              className={clsx(
                styles.popover,
                styles.authPopover,
                openPopover === 'auth' && styles.isOpen
              )}
              ref={authPopoverRef}
            >
              <div className={styles.popoverOption}>
                <Link className={styles.popoverOption} to={ROUTES.login}>
                  Войти
                </Link>
              </div>
              <div className={styles.popoverOption}>
                <Link className={styles.popoverOption} to={ROUTES.signup}>
                  Регистрация
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
