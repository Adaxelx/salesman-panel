import React from 'react';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useUser } from 'context/UserContext';
import styled from 'styled-components';

import { getSalesQuality } from 'api/salesmanPanel';
import { RoutesLinks } from 'types/router';
import { ItemWithBorder } from 'containers';
import { Button, Widget } from 'components';
import { Spinner } from 'components/Loader';

const AspectList = styled.ul`
  list-style: none;
`;

type SalesQualityType = {
  qualityGrade: number;
  qualityCategory: number;
  worstAspects: { id: number; type: 'realization' }[];
};

const SalesQualityWidget = () => {
  const intl = useIntl();
  const {
    state: { activeShop },
  } = useUser();

  const queryInfo = useQuery<SalesQualityType>(['salesQuality', activeShop], () =>
    getSalesQuality({ shopId: activeShop })
  );

  if (queryInfo.isLoading || queryInfo.isIdle) {
    return (
      <Widget title={intl.formatMessage({ id: 'salesQuality.title' })}>
        <Spinner />
      </Widget>
    );
  } else if (queryInfo.isError) {
    return null;
  }

  const { qualityGrade, qualityCategory, worstAspects } = queryInfo?.data;

  return (
    <Widget
      title={intl.formatMessage({ id: 'salesQuality.title' })}
      actions={
        <Link to={RoutesLinks.SalesQuantity}>
          <Button variant="tertiary">
            {intl.formatMessage({ id: 'salesmanPanel.actions.moreDetails' })}
          </Button>
        </Link>
      }
    >
      <div className="px-2 text-text-base">
        <ItemWithBorder>
          <p className="text-text-base">{intl.formatMessage({ id: 'salesQuality.grade' })}</p>
          <div className="w-full h-6 bg-tertiary rounded relative">
            <div className="h-6 bg-primary rounded dark:bg-gray-300" style={{ width: '45%' }} />
            <p className="absolute right-2 top-0">{`${qualityGrade}/100`}</p>
          </div>
        </ItemWithBorder>
        <ItemWithBorder className="flex items-center">
          <p className="mr-3">{intl.formatMessage({ id: 'salesQuality.category' })}</p>
          <div className="rounded border border-primary h-12 w-12 flex items-center justify-center">
            <p className={`text-xl text-base-${qualityCategory < 3 ? 'red' : 'green'}`}>
              {qualityCategory}
            </p>
          </div>
        </ItemWithBorder>
        <ItemWithBorder>
          <p>{intl.formatMessage({ id: 'salesQuality.aspects.title' })}</p>
          <AspectList>
            {worstAspects.map(({ id, type }) => (
              <li key={id} className="flex items-center">
                <div className="w-2.5 h-2.5 bg-tertiary rounded-full mr-2" />
                {intl.formatMessage({ id: `salesQuality.aspects.${type}` })}
              </li>
            ))}
          </AspectList>
        </ItemWithBorder>
      </div>
    </Widget>
  );
};

export default SalesQualityWidget;
