import React from 'react';

import { ItemWithBorder } from 'containers';

export interface AdviceProps {
  id: number;
  content: string;
}

const Advice = ({ content }: AdviceProps) => {
  return <ItemWithBorder className="py-2 text-text-base">{content}</ItemWithBorder>;
};

export default Advice;
