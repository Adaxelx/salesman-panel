import { useIntl } from 'react-intl';
import { Tooltip as RCTooltip } from 'recharts';

import { formatCurrency } from 'helpers/format';

import { MeasureType, TimeRangeType } from '../types';

const Tooltip = ({ measure, timeRange }: { measure: MeasureType; timeRange: TimeRangeType }) => {
  const intl = useIntl();
  return (
    <RCTooltip
      labelFormatter={(data: string) => {
        if (timeRange === TimeRangeType.week) {
          return intl.formatMessage({ id: `shared.daysOfWeek.${data}` });
        } else if (timeRange === TimeRangeType.year) {
          return intl.formatMessage({ id: `shared.months.${data}` });
        }
        return data;
      }}
      formatter={(value: number, name: any, props: any) => {
        if (measure === MeasureType.sales) {
          return [formatCurrency(value), intl.formatMessage({ id: `salesRaport.chart.${name}` })];
        }
        return [value, intl.formatMessage({ id: `salesRaport.chart.${name}` })];
      }}
    />
  );
};

export default Tooltip;
