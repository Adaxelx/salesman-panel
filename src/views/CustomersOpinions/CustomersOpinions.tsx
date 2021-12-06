import React from 'react';
import { useIntl } from 'react-intl';

import { Page } from 'containers';

const CustomersOpinions = () => {
  const intl = useIntl();
  return <Page title={intl.formatMessage({ id: 'pageTitles.customersOpinions' })} />;
};

export default CustomersOpinions;
