import React, { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { useUser } from 'context/UserContext';

import { getSalesData } from 'api/salesRaport';
import useResizeObserver from 'hooks/useResizeObserver';
import { Loader, SelectOption, Switch, Widget } from 'components';

import BarChart from './BarChart';
import LineChart from './LineChart';
import SelectWithHeader from './SelectWithHeader';
import { ChartType, MeasureType, TimeRangeType } from './types';

const SalesRaportWidget = () => {
  const intl = useIntl();
  const [measure, setMeasure] = useState<MeasureType>(MeasureType.sales);
  const [timeRange, setTimeRange] = useState<TimeRangeType>(TimeRangeType.today);
  const [chartType, setChartType] = useState<ChartType>(ChartType.bar);
  const [previousPeriod, setPreviousPeriod] = useState(false);
  const {
    state: { activeShop },
  } = useUser();
  const widget = useRef<HTMLDivElement | null>(null);
  const [width] = useResizeObserver(widget);

  const queryInfo = useQuery([activeShop, measure, timeRange, previousPeriod], () =>
    getSalesData({ shopId: activeShop, query: { measure, timeRange, previousPeriod } })
  );

  if (queryInfo.isLoading || queryInfo.isIdle) {
    <Widget title={intl.formatMessage({ id: 'salesmanPanel.salesReport.title' })}>
      <Loader />
    </Widget>;
  } else if (queryInfo.isError) {
    return null;
  }

  return (
    <Widget title={intl.formatMessage({ id: 'salesmanPanel.salesReport.title' })} ref={widget}>
      <div className="flex justify-between flex-wrap p-2">
        <SelectWithHeader
          value={measure}
          onChange={setMeasure}
          header={intl.formatMessage({ id: 'salesRaport.selectMeasure.title' })}
        >
          {Object.values(MeasureType).map(value => (
            <SelectOption value={value}>
              {intl.formatMessage({ id: `salesRaport.selectMeasure.options.${value}` })}
            </SelectOption>
          ))}
        </SelectWithHeader>
        <SelectWithHeader
          value={timeRange}
          onChange={setTimeRange}
          header={intl.formatMessage({ id: 'salesRaport.selectTime.title' })}
        >
          {Object.values(TimeRangeType).map(value => (
            <SelectOption value={value}>
              {intl.formatMessage({ id: `salesRaport.selectTime.options.${value}` })}
            </SelectOption>
          ))}
        </SelectWithHeader>
        <SelectWithHeader
          value={chartType}
          onChange={setChartType}
          header={intl.formatMessage({ id: 'salesRaport.selectChartType.title' })}
        >
          {Object.values(ChartType).map(value => (
            <SelectOption value={value}>
              {intl.formatMessage({ id: `salesRaport.selectChartType.options.${value}` })}
            </SelectOption>
          ))}
        </SelectWithHeader>
        <div className="w-40">
          <p className="text-primary">
            {intl.formatMessage({ id: `salesRaport.legend.previousPeriod` })}
          </p>
          <Switch on={previousPeriod} toggle={() => setPreviousPeriod(previous => !previous)} />
        </div>
      </div>
      <div className="flex justify-center">
        {chartType === ChartType.bar ? (
          <BarChart
            data={queryInfo.data}
            width={width}
            height={350}
            timeRange={timeRange}
            measure={measure}
          />
        ) : (
          <LineChart
            data={queryInfo.data}
            width={width}
            height={350}
            timeRange={timeRange}
            measure={measure}
          />
        )}
      </div>
    </Widget>
  );
};

export default SalesRaportWidget;
