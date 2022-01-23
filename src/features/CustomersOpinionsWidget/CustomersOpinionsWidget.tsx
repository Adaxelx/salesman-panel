import React from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useUser } from 'context/UserContext';

import { getCustomersOpinions } from 'api/salesmanPanel';
import { RoutesLinks } from 'types/router';
import { Button, Widget } from 'components';
import { Spinner } from 'components/Loader';
import Tabs, { Tab, TabPanel } from 'components/Tabs';

import Opinion from './Opinion';
import { OpinionProps } from './Opinion/Opinion';
const CustomersOpinionsWidget = () => {
  const intl = useIntl();
  const {
    state: { activeShop },
  } = useUser();

  const queryInfo = useQuery<OpinionProps[]>([activeShop], () =>
    getCustomersOpinions({ shopId: activeShop })
  );

  if (queryInfo.isLoading || queryInfo.isIdle) {
    return (
      <Widget title={intl.formatMessage({ id: 'customersOpinions.title' })}>
        <Spinner />
      </Widget>
    );
  } else if (queryInfo.isError) {
    return null;
  }

  const opinions = queryInfo?.data;

  return (
    <Widget
      title={intl.formatMessage({ id: 'customersOpinions.title' })}
      actions={
        <Link to={RoutesLinks.CustomerOpinions}>
          <Button variant="tertiary">
            {intl.formatMessage({ id: 'salesmanPanel.actions.showMore' })}
          </Button>
        </Link>
      }
    >
      <Tabs
        list={
          <>
            <Tab>{intl.formatMessage({ id: 'customersOpinions.tabs.all' })}</Tab>
            <Tab>{intl.formatMessage({ id: 'customersOpinions.tabs.positive' })}</Tab>
            <Tab>{intl.formatMessage({ id: 'customersOpinions.tabs.negative' })}</Tab>
          </>
        }
        panels={
          <>
            <TabPanel className="px-2">
              {opinions.slice(0, 5).map(data => (
                <Opinion key={data.id} {...data} />
              ))}
            </TabPanel>
            <TabPanel className="px-2">
              {opinions
                .filter(({ rate }) => rate >= 3)
                .slice(0, 5)
                .map(data => (
                  <Opinion key={data.id} {...data} />
                ))}
            </TabPanel>
            <TabPanel className="px-2">
              {opinions
                .filter(({ rate }) => rate < 3)
                .slice(0, 5)
                .map(data => (
                  <Opinion key={data.id} {...data} />
                ))}
            </TabPanel>
          </>
        }
      />
    </Widget>
  );
};

export default CustomersOpinionsWidget;
