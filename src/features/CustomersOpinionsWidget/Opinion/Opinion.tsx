import React from 'react';

import { ItemWithBorder } from 'containers';

export interface OpinionProps {
  rate: number;
  user: string;
  description: string;
  id: number;
}

const Opinion = ({ rate, user, description }: OpinionProps) => {
  return (
    <ItemWithBorder className="py-2">
      <div className="flex">
        <p className={`mr-3 text-base-${rate < 3 ? 'red' : 'green'} text-2xl`}>{`${rate}/5`}</p>
        <p className="font-bold text-text-base">{user}</p>
      </div>
      <p className="text-text-base">{`${description.slice(0, 100)}${
        description.length > 100 ? '...' : ''
      }`}</p>
    </ItemWithBorder>
  );
};

export default Opinion;
