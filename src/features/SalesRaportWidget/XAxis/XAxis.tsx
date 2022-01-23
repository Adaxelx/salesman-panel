import { useIntl } from 'react-intl';
import { XAxis as RCXAxis } from 'recharts';

import { TimeRangeType } from '../types';

const XAxis = ({ timeRange }: { timeRange: TimeRangeType }) => {
  const intl = useIntl();
  return (
    <RCXAxis
      dataKey="name"
      tickFormatter={data => {
        if (timeRange === TimeRangeType.week) {
          return intl.formatMessage({ id: `shared.daysOfWeek.${data}` });
        } else if (timeRange === TimeRangeType.year) {
          return intl.formatMessage({ id: `shared.months.${data}` });
        }
        return data;
      }}
    />
  );
};

export default XAxis;
