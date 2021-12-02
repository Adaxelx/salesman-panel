import React, { ReactNode } from 'react';

import { ButtonVariants } from 'types';

interface ButtonProps {
  variant?: ButtonVariants;
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const getStyles = (variant: ButtonVariants) => {
  switch (variant) {
    case 'primary':
      return `bg-primary text-base-white`;
    case 'secondary':
      return `bg-base-white text-primary border border-primary`;
    case 'tertiary':
      return `bg-transparent text-primary`;
  }
};

const Button = ({ variant = 'primary', type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      className={`${getStyles(variant)} min-w-uiElement rounded-full h-12 px-4`}
      type={type}
      {...rest}
    />
  );
};

export default Button;
