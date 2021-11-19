import React, { ReactNode } from 'react';

type Sizes = 'h1';

interface TitleProps {
  size?: 'h1';
  children: ReactNode;
  className?: string;
}

const pickClasses = (size: Sizes) => {
  switch (size) {
    case 'h1':
      return 'text-4xl text-text-base font-medium';
  }
};

const Title = ({ size: Size = 'h1', className, children }: TitleProps) => {
  return <Size className={`${pickClasses(Size)} ${className}`}>{children}</Size>;
};

export default Title;
