import React, { ReactNode } from 'react';
import ReachAlert from '@reach/alert';

interface AlertProps {
  children: ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error';
}

const Alert = ({ children, type = 'error' }: AlertProps) => {
  return <ReachAlert className={`bg-${type}   p-2 rounded mb-4`}>{children}</ReachAlert>;
};

export default Alert;
