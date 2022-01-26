import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

export interface OrderProps {
  id: number;
  type: 'unpaid' | 'notSend' | 'returns';
  count: number;
}

const Wrapper = styled.div`
  &:not(:last-child) {
    border-right: 1px solid var(--colors-tertiary);
  }
`;

const Order = ({ type, count }: OrderProps) => {
  const intl = useIntl();
  return (
    <Wrapper className="flex-1 flex h-full flex-col items-center justify-center py-3">
      <p className="text-lg text-primary">
        {intl.formatMessage({ id: `ordersWidget.tab.${type}` })}
      </p>
      <p className="text-4xl text-text-base">{count}</p>
    </Wrapper>
  );
};

export default Order;
