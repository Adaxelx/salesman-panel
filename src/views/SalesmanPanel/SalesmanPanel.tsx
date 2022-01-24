import React from 'react';
import { useIntl } from 'react-intl';
import { useUser } from 'context/UserContext';
import styled from 'styled-components';

import CustomersOpinionsWidget from 'features/CustomersOpinionsWidget';
import OffersRankingWidget from 'features/OffersRankingWidget';
import SalesAdvicesWidget from 'features/SalesAdvicesWidget';
import SalesRaportWidget from 'features/SalesRaportWidget';
import { Page } from 'containers';

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: calc(50% - 16px);
  }
`;

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
        <OffersRankingWidget />
        <Wrapper className="flex flex-col">
          <SalesAdvicesWidget />
        </Wrapper>
      </div>
    </Page>
  );
};

export default SalesmanPanel;
