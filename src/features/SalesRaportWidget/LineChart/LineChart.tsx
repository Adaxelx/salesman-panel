import React from 'react';
import { CartesianGrid, Line, LineChart as RCLineChart } from 'recharts';

// import styled from 'styled-components';
import Legend from '../Legend';
import Tooltip from '../Tooltip';
import { ChartProps } from '../types';
import XAxis from '../XAxis';
import YAxis from '../YAxis';

// const StyledLine = styled(Line)`
//   fill: var(--colors-primary);
// `;

// const CustomLine = ({ index, ...rest }: any) => {
//   return <StyledLine {...rest} isActive={index === 6} />;
// };

const LineChart = ({ data, width, height, timeRange, measure }: ChartProps) => {
  return (
    <RCLineChart width={width - 16} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {XAxis({ timeRange })}
      {YAxis({ measure })}
      {Tooltip({ measure, timeRange })}
      {Legend({ isBar: false })}
      <Line
        type="monotone"
        dataKey="actual"
        stroke={getComputedStyle(document.body).getPropertyValue('--colors-primary')}
      />
      {data?.some(val => typeof val?.previous === 'number') && (
        <Line
          type="monotone"
          dataKey="previous"
          stroke={getComputedStyle(document.body).getPropertyValue('--colors-secondary')}
        />
      )}
    </RCLineChart>
  );
};

export default LineChart;
