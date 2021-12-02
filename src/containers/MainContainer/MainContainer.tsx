import React, { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode | ReactNode[];
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <main className={`w-full h-screen bg-background p-2 pt-16`}>{children}</main>;
};

export default MainContainer;
