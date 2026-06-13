import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  label?: string;
  error?: string;
  className?: string;
  controlClassName?: string;
};

export function Input({ label, error, id, className, controlClassName, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(styles.input, error && styles.inputError, controlClassName)}
        aria-invalid={Boolean(error)}
        aria-describedby={error && inputId ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && inputId && (
        <span id={`${inputId}-error`} className={styles.errorText} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
