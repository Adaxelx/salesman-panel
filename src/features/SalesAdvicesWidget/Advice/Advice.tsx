import React from 'react';
import { useIntl } from 'react-intl';

import { ItemWithBorder } from 'containers';

export interface AdviceProps {
  id: number;
  content: string;
}

const Advice = ({ content }: AdviceProps) => {
  const intl = useIntl();
  return (
    <ItemWithBorder className="text-text-base">
      {intl.formatMessage({ id: `salesAdvices.advices.${content}` })}
    </ItemWithBorder>
  );
};

export default Advice;
