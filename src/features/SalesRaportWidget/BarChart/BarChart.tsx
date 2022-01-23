import { Bar, BarChart as RCBarChart, CartesianGrid, Cell } from 'recharts';

import Legend from '../Legend';
import Tooltip from '../Tooltip';
import { ChartProps } from '../types';
import XAxis from '../XAxis';
import YAxis from '../YAxis';

const BarChart = ({ data, width, height, timeRange, measure }: ChartProps) => {
  return (
    <RCBarChart width={width - 16} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {XAxis({ timeRange })}
      {YAxis({ measure })}
      {Tooltip({ measure, timeRange })}
      {Legend()}
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
