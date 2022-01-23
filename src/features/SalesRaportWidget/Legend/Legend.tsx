import { FormattedMessage } from 'react-intl';
import { Legend as RCLegend } from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';

const renderLegend = ({ payload }: { payload?: Payload[] }, isBar: boolean) => {
  return (
    <ul className={`flex flex-row justify-center flex-wrap`}>
      {payload?.map((entry, index) => (
        <li key={`item-${index}`} className="mr-2 flex flex-row items-center">
          <div
            className={`h-2 w-2 bg-${
              entry.value === 'actual' ? 'primary' : isBar ? 'tertiary' : 'secondary'
            } rounded-full mr-1`}
          />
          {<FormattedMessage id={`salesRaport.chart.${entry.value}`} />}
        </li>
      ))}
      {isBar && (
        <li className="mr-2 flex flex-row items-center">
          <div className="h-2 w-2 bg-secondary rounded-full mr-1" />
          {<FormattedMessage id={`salesRaport.chart.notFinished`} />}
        </li>
      )}
    </ul>
  );
};

const Legend = ({ isBar = true }: { isBar?: boolean } = {}) => {
  return <RCLegend content={props => renderLegend(props, isBar)} />;
};

export default Legend;
