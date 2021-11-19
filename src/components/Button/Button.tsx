import React, { ReactNode } from 'react';

import { ButtonVariants } from 'types';

interface ButtonProps {
  variant?: ButtonVariants;
  children: ReactNode;
  type: 'button' | 'submit';
}

const Button = ({ variant = 'primary', type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-${variant} min-w-uiElement rounded-full h-12 text-text-base px-4`}
      type={type}
      {...rest}
    />
  );
};

export default Button;
