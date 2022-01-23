export type DataType = { name: string; actual: number; previous?: number };

export interface ChartProps {
  data: DataType[];
  width: number;
  height: number;
  timeRange: TimeRangeType;
  measure: MeasureType;
}

export enum MeasureType {
  sales = 'sales',
  count = 'count',
}
export enum TimeRangeType {
  today = 'today',
  week = 'week',
  year = 'year',
}
export enum ChartType {
  bar = 'bar',
  linear = 'linear',
}
