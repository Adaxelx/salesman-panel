import React from 'react';
import { useIntl } from 'react-intl';
import { useUser } from 'context/UserContext';

import CustomersOpinionsWidget from 'features/CustomersOpinionsWidget';
import SalesRaportWidget from 'features/SalesRaportWidget';
import { Page } from 'containers';

const SalesmanPanel = () => {
  const intl = useIntl();
  const {
    state: { user },
  } = useUser();
  return (
    <Page title={intl.formatMessage({ id: 'salesmanPanel.title' }, { firstName: user?.firstName })}>
      <div className="flex flex-wrap justify-between">
        <SalesRaportWidget />
        <CustomersOpinionsWidget />
      </div>
    </Page>
  );
};

export default SalesmanPanel;
