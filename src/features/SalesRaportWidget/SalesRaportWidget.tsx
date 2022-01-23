import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { useUser } from 'context/UserContext';

import { getSalesData } from 'api/salesRaport';
import { SelectOption, Switch, Widget } from 'components';

import SelectWithHeader from './SelectWithHeader';

enum MeasureType {
  sales = 'sales',
  count = 'count',
}
enum TimeRangeType {
  today = 'today',
  week = 'week',
  lasWeek = 'lastWeek',
}
enum ChartType {
  bar = 'bar',
  linear = 'linear',
}

const SalesRaportWidget = () => {
  const intl = useIntl();
  const [measure, setMeasure] = useState<MeasureType>(MeasureType.sales);
  const [timeRange, setTimeRange] = useState<TimeRangeType>(TimeRangeType.today);
  const [chartType, setChartType] = useState<ChartType>(ChartType.bar);
  const [previousPeriod, setPreviousPeriod] = useState(false);
  const {
    state: { activeShop },
  } = useUser();
  console.log(activeShop);

  const queryInfo = useQuery([activeShop], () =>
    getSalesData({ shopId: activeShop, query: { measure, timeRange, previousPeriod } })
  );
  console.log(queryInfo?.data);
  return (
    <Widget title={intl.formatMessage({ id: 'salesmanPanel.salesReport.title' })}>
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
    </Widget>
  );
};

export default SalesRaportWidget;
