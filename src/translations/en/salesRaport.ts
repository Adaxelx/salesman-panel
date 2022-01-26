export default {
  title: 'Sales report',
  selectMeasure: {
    title: 'Measure',
    options: {
      sales: 'Sales',
      count: 'Sold',
    },
  },
  selectTime: {
    title: 'Time range',
    options: {
      today: 'Today',
      week: 'This week',
      year: 'This year',
    },
  },
  selectChartType: {
    title: 'Chart type',
    options: {
      linear: 'Line',
      bar: 'Bar',
    },
  },
  now: 'now',
  legend: {
    actualPeriod: 'Current period',
    previousPeriod: 'Previous period',
    notFinishedPeriod: 'Not finished period',
  },
  chart: {
    actual: 'Current period',
    previous: 'Previous period',
    notFinished: 'Not finished period',
  },
};
