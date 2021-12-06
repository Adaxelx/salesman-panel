import React, { ReactNode } from 'react';

import { Title } from 'components';

interface PageProps {
  children?: ReactNode;
  title: string;
}

const Page = ({ children, title }: PageProps) => {
  return (
    <div className="flex flex-col">
      <Title size="h1" className="mb-4">
        {title}
      </Title>
      {children}
    </div>
  );
};

export default Page;
