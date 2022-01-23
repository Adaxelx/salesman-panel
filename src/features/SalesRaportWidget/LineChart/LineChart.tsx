import React from 'react';
import { CartesianGrid, Line, LineChart as RCLineChart } from 'recharts';

import Legend from '../Legend';
import Tooltip from '../Tooltip';
import { ChartProps } from '../types';
import XAxis from '../XAxis';
import YAxis from '../YAxis';

const LineChart = ({ data, width, height, timeRange, measure }: ChartProps) => {
  return (
    <RCLineChart width={width - 16} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {XAxis({ timeRange })}
      {YAxis({ measure })}
      {Tooltip({ measure, timeRange })}
      {Legend({ isBar: false })}
      <Line type="monotone" dataKey="actual" stroke="#067bc2" />
      {data?.some(val => typeof val?.previous === 'number') && (
        <Line type="monotone" dataKey="previous" stroke="#ecc30b" />
      )}
    </RCLineChart>
  );
};

export default LineChart;
