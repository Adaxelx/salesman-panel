import React from 'react';
import { useIntl } from 'react-intl';

import { Widget } from 'components';
import Tabs, { Tab, TabPanel } from 'components/Tabs';

const OffersRankingWidget = () => {
  const intl = useIntl();
  return (
    <Widget title={intl.formatMessage({ id: 'offersRanking.title' })}>
      <Tabs
        list={
          <>
            <Tab>{intl.formatMessage({ id: 'offersRanking.tabs.common' })}</Tab>
            <Tab>{intl.formatMessage({ id: 'offersRanking.tabs.least' })}</Tab>
          </>
        }
        panels={
          <>
            <TabPanel className="px-2"></TabPanel>
            <TabPanel className="px-2"></TabPanel>
          </>
        }
      />
    </Widget>
  );
};

export default OffersRankingWidget;
