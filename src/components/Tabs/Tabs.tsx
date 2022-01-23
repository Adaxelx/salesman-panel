import '@reach/tabs/styles.css';

import React, { ReactNode } from 'react';
import { TabList, TabPanels, Tabs as ReachTabs } from '@reach/tabs';
import styled from 'styled-components';

interface TabsProps {
  list: ReactNode;
  panels: ReactNode;
}

const StyledReachTabs = styled(ReachTabs)`
  [data-reach-tab-list] {
    background-color: var(--colors-text-reverse);
    border-bottom: 1px solid var(--colors-primary);
  }

  [data-reach-tab][data-selected] {
    color: var(--colors-primary);
    border-width: 3px;
  }

  [data-reach-tab] {
    color: var(--colors-text-base);
  }
`;

const Tabs = ({ list, panels }: TabsProps) => {
  return (
    <StyledReachTabs>
      <TabList>{list}</TabList>
      <TabPanels>{panels}</TabPanels>
    </StyledReachTabs>
  );
};

export { TabPanel, Tab } from '@reach/tabs';

export default Tabs;
