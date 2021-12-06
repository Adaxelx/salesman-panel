import React from 'react';
import { useIntl } from 'react-intl';

import { Page } from 'containers';

const SalesQuality = () => {
  const intl = useIntl();
  return <Page title={intl.formatMessage({ id: 'pageTitles.salesQuality' })} />;
};

export default SalesQuality;
