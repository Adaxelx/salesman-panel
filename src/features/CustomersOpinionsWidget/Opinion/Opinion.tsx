import React from 'react';
import styled from 'styled-components';

export interface OpinionProps {
  rate: number;
  user: string;
  description: string;
  id: number;
}

const Wrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid var(--colors-tertiary);
  }
`;

const Opinion = ({ rate, user, description }: OpinionProps) => {
  return (
    <Wrapper className="py-2">
      <div className="flex">
        <p className={`mr-3 text-base-${rate < 3 ? 'red' : 'green'} text-2xl`}>{`${rate}/5`}</p>
        <p className="font-bold text-text-base">{user}</p>
      </div>
      <p className="text-text-base">{`${description.slice(0, 100)}${
        description.length > 100 ? '...' : ''
      }`}</p>
    </Wrapper>
  );
};

export default Opinion;
