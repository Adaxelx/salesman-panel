import React from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { useUser } from 'context/UserContext';

import { getSalesAdvices } from 'api/salesmanPanel';
import { FullWidthWidget } from 'containers';
import { Spinner } from 'components/Loader';

import Advice from './Advice';
import { AdviceProps } from './Advice/Advice';

const SalesAdvicesWidget = () => {
  const intl = useIntl();
  const {
    state: { activeShop },
  } = useUser();

  const queryInfo = useQuery<AdviceProps[]>(['salesAdvices', activeShop], () =>
    getSalesAdvices({ shopId: activeShop })
  );

  if (queryInfo.isLoading || queryInfo.isIdle) {
    return (
      <FullWidthWidget title={intl.formatMessage({ id: 'salesAdvices.title' })}>
        <Spinner />
      </FullWidthWidget>
    );
  } else if (queryInfo.isError) {
    return null;
  }

  const advices = queryInfo?.data;

  return (
    <FullWidthWidget title={intl.formatMessage({ id: 'salesAdvices.title' })}>
      <div className="px-2">
        {advices.map(advice => (
          <Advice key={advice.id} {...advice} />
        ))}
      </div>
    </FullWidthWidget>
  );
};

export default SalesAdvicesWidget;
