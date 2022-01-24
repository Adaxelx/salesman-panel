import React, { ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

import { Title } from 'components';

interface WidgetProps {
  title: string;
  actions?: ReactNode | ReactNode[];
  className?: string;
  children: ReactNode;
}

const StyledWidget = styled.div`
  @media (min-width: 768px) {
    width: calc(50% - 16px);
  }
`;

const Widget = forwardRef(
  (
    { title, actions, className = '', children }: WidgetProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledWidget className={`${className} mb-8 w-full flex flex-col`} ref={ref}>
        <Title size="h2" color="primary" className="mb-2">
          {title}
        </Title>
        <section
          className={`border border-tertiary rounded-xl flex flex-col pt-2 flex-grow ${
            actions ? '' : 'pb-2'
          }`}
        >
          <div className="flex-grow">{children}</div>
          {actions ? (
            <div className="flex justify-center w-100 py-2 border-t border-tertiary mt-2">
              {actions}
            </div>
          ) : null}
        </section>
      </StyledWidget>
    );
  }
);

export default Widget;
