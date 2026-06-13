import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => {
  if (props.buttonType === 'button') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, variant, className, buttonType, fullWidth = false, ...buttonProps } = props;
    const resultClassName = clsx(
      styles.button,
      styles[variant],
      className,
      fullWidth && styles.fullWidth
    );
    return (
      <button className={resultClassName} {...buttonProps}>
        {children}
      </button>
    );
  }

  if (props.buttonType === 'innerLink') {
    const {
      to,
      children,
      variant,
      className,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      buttonType,
      fullWidth = false,
      ...innerLinkProps
    } = props;
    const resultClassName = clsx(
      styles.button,
      styles[variant],
      className,
      fullWidth && styles.fullWidth
    );
    return (
      <Link to={to} className={resultClassName} {...innerLinkProps}>
        {children}
      </Link>
    );
  }

  if (props.buttonType === 'outerLink') {
    const {
      href,
      children,
      variant,
      className,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      buttonType,
      fullWidth = false,
      ...outerLinkProps
    } = props;
    const resultClassName = clsx(
      styles.button,
      styles[variant],
      className,
      fullWidth && styles.fullWidth
    );
    return (
      <a href={href} className={resultClassName} {...outerLinkProps}>
        {children}
      </a>
    );
  }
};
