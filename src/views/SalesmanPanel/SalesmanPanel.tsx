import React from 'react';
import { useIntl } from 'react-intl';
import { useUser } from 'context/UserContext';

import { Page } from 'containers';
import { Button, Widget } from 'components';

const SalesmanPanel = () => {
  const intl = useIntl();
  const {
    state: { user },
  } = useUser();
  return (
    <Page title={intl.formatMessage({ id: 'salesmanPanel.title' }, { firstName: user?.firstName })}>
      <div className="flex flex-wrap justify-between">
        <Widget
          title={intl.formatMessage({ id: 'salesmanPanel.salesReport.title' })}
          actions={
            <Button variant="tertiary">
              {intl.formatMessage({ id: 'salesmanPanel.actions.showMore' })}
            </Button>
          }
        >
          Example widget
        </Widget>
      </div>
    </Page>
  );
};

export default SalesmanPanel;
