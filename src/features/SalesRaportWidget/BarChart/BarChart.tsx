import { FormattedMessage, useIntl } from 'react-intl';
import {
  Bar,
  BarChart as RCBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';

import { formatCurrency } from 'helpers/format';

import { MeasureType, TimeRangeType } from '../SalesRaportWidget';

type DataType = { name: string; actual: number; previous?: number };

interface BarChartProps {
  data: DataType[];
  width: number;
  height: number;
  timeRange: TimeRangeType;
  measure: MeasureType;
}

const renderLegend = ({ payload }: { payload?: Payload[] }) => {
  return (
    <ul className={`flex flex-row justify-center flex-wrap`}>
      {payload?.map((entry, index) => (
        <li key={`item-${index}`} className="mr-2 flex flex-row items-center">
          <div className="h-2 w-2 bg-primary rounded-full mr-1" />
          {<FormattedMessage id={`salesRaport.chart.${entry.value}`} />}
        </li>
      ))}
      <li className="mr-2 flex flex-row items-center">
        <div className="h-2 w-2 bg-secondary rounded-full mr-1" />
        {<FormattedMessage id={`salesRaport.chart.notFinished`} />}
      </li>
    </ul>
  );
};

const BarChart = ({ data, width, height, timeRange, measure }: BarChartProps) => {
  const intl = useIntl();
  return (
    <RCBarChart width={width - 16} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
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
      <YAxis
        tickFormatter={data => {
          if (measure === MeasureType.sales) {
            return formatCurrency(data);
          }
          return data;
        }}
      />
      <Tooltip
        formatter={(value: number, name: any, props: any) => {
          if (measure === MeasureType.sales) {
            return [formatCurrency(value), intl.formatMessage({ id: `salesRaport.chart.${name}` })];
          }
          return [value, intl.formatMessage({ id: `salesRaport.chart.${name}` })];
        }}
      />
      <Legend content={renderLegend} />
      <Bar dataKey="actual" fill="#067bc2">
        {data?.map((_, index) => (
          <Cell key={index} fill={index === data.length - 1 ? '#ecc30b' : '#067bc2'} />
        ))}
      </Bar>
      {data?.some(val => typeof val?.previous === 'number') && (
        <Bar dataKey="previous" fill="#84bcda" />
      )}
    </RCBarChart>
  );
};

export default BarChart;
