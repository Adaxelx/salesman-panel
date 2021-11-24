import React, { ReactNode } from 'react';

type IconSize = 'regular' | 'small' | 'big';

interface IconWrapperProps {
  size?: IconSize;
  children: ReactNode;
  className?: string;
}

const pickSize = (size: IconSize) => {
  switch (size) {
    case 'regular':
      return 'w-6 h6';
    case 'big':
      return 'w-12 h-12';
    case 'small':
      return 'w-4 h-4';
  }
};

const IconWrapper = ({ size = 'regular', children, className = '' }: IconWrapperProps) => {
  return <div className={`${pickSize(size)} text-text-base ${className}`}>{children}</div>;
};

export default IconWrapper;
