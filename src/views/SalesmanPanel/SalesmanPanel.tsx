import React from 'react';
import { useIntl } from 'react-intl';

import { Button, Widget } from 'components';

const SalesmanPanel = () => {
  const intl = useIntl();
  return (
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
  );
};

export default SalesmanPanel;
