import React from 'react';
import { useIntl } from 'react-intl';

import { Page } from 'containers';

const OrderCategories = () => {
  const intl = useIntl();
  return <Page title={intl.formatMessage({ id: 'pageTitles.orderCategories' })} />;
};

export default OrderCategories;
