import React from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useUser } from 'context/UserContext';

import { getOrders } from 'api/salesmanPanel';
import { RoutesLinks } from 'types/router';
import { FullWidthWidget } from 'containers';
import { Spinner } from 'components/Loader';

import Order from './Order';
import { OrderProps } from './Order/Order';

const OrdersWidget = () => {
  const intl = useIntl();
  const {
    state: { activeShop },
  } = useUser();

  const queryInfo = useQuery<OrderProps[]>(['orders', activeShop], () =>
    getOrders({ shopId: activeShop })
  );

  if (queryInfo.isLoading || queryInfo.isIdle) {
    return (
      <FullWidthWidget title={intl.formatMessage({ id: 'customersOpinions.title' })}>
        <Spinner />
      </FullWidthWidget>
    );
  } else if (queryInfo.isError) {
    return null;
  }

  const orders = queryInfo?.data;

  return (
    <FullWidthWidget
      title={intl.formatMessage({ id: 'offersRanking.title' })}
      className="flex-grow"
      withoutPadding
    >
      <Link to={RoutesLinks.OrderCategories}>
        <div className="flex h-full">
          {orders.map(order => (
            <Order key={order.id} {...order} />
          ))}
        </div>
      </Link>
    </FullWidthWidget>
  );
};

export default OrdersWidget;
