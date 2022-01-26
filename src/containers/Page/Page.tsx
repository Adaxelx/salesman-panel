import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Title } from 'components';

interface PageProps {
  children?: ReactNode;
  title: string;
}

const StyledPage = styled.div`
  width: 100%;
  min-height: 100vh;
  @media (min-width: 1536px) {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
`;

const Page = ({ children, title }: PageProps) => {
  return (
    <StyledPage className="flex flex-col">
      <Title size="h1" className="mb-4">
        {title}
      </Title>
      {children}
    </StyledPage>
  );
};

export default Page;
