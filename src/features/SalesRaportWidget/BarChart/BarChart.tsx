import { Bar, BarChart as RCBarChart, CartesianGrid, Rectangle } from 'recharts';
import styled from 'styled-components';

import Legend from '../Legend';
import Tooltip from '../Tooltip';
import { ChartProps } from '../types';
import XAxis from '../XAxis';
import YAxis from '../YAxis';

interface RectangleProps {
  isActive: boolean;
}

const StyledRectangle = styled(Rectangle)<RectangleProps>`
  fill: ${({ isActive }) => (isActive ? 'var(--colors-secondary)' : 'var(--colors-primary)')};
`;

const CustomBar = ({ index, ...rest }: any) => {
  return <StyledRectangle {...rest} isActive={index === 6} />;
};

const StyledRectangleSecond = styled(Rectangle)<RectangleProps>`
  fill: var(--colors-tertiary);
`;

const CustomSecondBar = (props: any) => {
  return <StyledRectangleSecond {...props} />;
};

const BarChart = ({ data, width, height, timeRange, measure }: ChartProps) => {
  return (
    <RCBarChart width={width - 16} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      {XAxis({ timeRange })}
      {YAxis({ measure })}
      {Tooltip({ measure, timeRange })}
      {Legend()}
      <Bar dataKey="actual" shape={<CustomBar />} />

      {data?.some(val => typeof val?.previous === 'number') && (
        <Bar dataKey="previous" shape={<CustomSecondBar />} />
      )}
    </RCBarChart>
  );
};

export default BarChart;
