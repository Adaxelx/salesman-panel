import { YAxis as RCAxis } from 'recharts';

import { formatCurrency } from 'helpers/format';

import { MeasureType } from '../types';

const YAxis = ({ measure }: { measure: MeasureType }) => {
  return (
    <RCAxis
      tickFormatter={data => {
        if (measure === MeasureType.sales) {
          return formatCurrency(data);
        }
        return data;
      }}
    />
  );
};

export default YAxis;
