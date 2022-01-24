import React, { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode | ReactNode[];
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main
      className={`w-full min-h-screen bg-background p-2 pt-16 flex flex-col items-center justify-center`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
