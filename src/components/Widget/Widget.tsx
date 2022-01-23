import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

import { Title } from 'components';

interface WidgetProps {
  title: string;
  actions?: ReactNode | ReactNode[];
  className?: string;
  children: ReactNode;
}

const Widget = forwardRef(
  (
    { title, actions, className = '', children }: WidgetProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={`${className} mb-8 w-full md:w-6/12 2xl:w-4/12`} ref={ref}>
        <Title size="h2" color="primary" className="mb-2">
          {title}
        </Title>
        <section
          className={`border border-tertiary rounded-xl flex flex-col pt-2 ${
            actions ? '' : 'pb-2'
          }`}
        >
          {children}
          {actions ? (
            <div className="flex justify-center w-100 py-2 border-t border-tertiary mt-2">
              {actions}
            </div>
          ) : null}
        </section>
      </div>
    );
  }
);

export default Widget;
