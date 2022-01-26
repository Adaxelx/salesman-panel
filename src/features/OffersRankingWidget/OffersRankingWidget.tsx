import React from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { useUser } from 'context/UserContext';

import { getOffersRanking } from 'api/salesmanPanel';
import { Widget } from 'components';
import { Spinner } from 'components/Loader';
import Tabs, { Tab, TabPanel } from 'components/Tabs';

import Offer from './Offer';
import { OfferProps } from './Offer/Offer';

const OffersRankingWidget = () => {
  const intl = useIntl();
  const {
    state: { activeShop },
  } = useUser();

  const queryInfo = useQuery<{ common: OfferProps[]; least: OfferProps[] }>(
    ['offersRanking', activeShop],
    () => getOffersRanking({ shopId: activeShop })
  );

  if (queryInfo.isLoading || queryInfo.isIdle) {
    return (
      <Widget title={intl.formatMessage({ id: 'offersRanking.title' })}>
        <Spinner />
      </Widget>
    );
  } else if (queryInfo.isError) {
    return null;
  }

  const { common, least } = queryInfo?.data;

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
            <TabPanel className="px-3">
              {common.map((offer, index) => (
                <Offer key={offer.id} place={index + 1} {...offer} />
              ))}
            </TabPanel>
            <TabPanel className="px-3">
              {least.map((offer, index) => (
                <Offer key={offer.id} place={index + 1} {...offer} />
              ))}
            </TabPanel>
          </>
        }
      />
    </Widget>
  );
};

export default OffersRankingWidget;
