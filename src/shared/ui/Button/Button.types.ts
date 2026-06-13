import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant: 'primary' | 'secondary';
  fullWidth?: boolean;
};

export type ButtonProps =
  | ({ buttonType: 'button' } & BaseProps & ComponentPropsWithoutRef<'button'>)
  | ({ buttonType: 'innerLink' } & BaseProps & ComponentPropsWithoutRef<typeof Link>)
  | ({ buttonType: 'outerLink' } & BaseProps & ComponentPropsWithoutRef<'a'>);
