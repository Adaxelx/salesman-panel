import React from 'react';
import { useIntl } from 'react-intl';

import { formatCurrency } from 'helpers/format';
import { ItemWithBorder } from 'containers';

type WithPlace = {
  place: number;
};

export type OfferProps = {
  id: number;
  name: string;
  count: number;
  price: number;
};

const Offer = ({ name, count, price, place }: OfferProps & WithPlace) => {
  const intl = useIntl();
  return (
    <ItemWithBorder className="flex py-4 items-center justify-between w-100">
      <div className="flex items-center text-text-base">
        <div className="w-4">{place}.</div>
        <div className="w-16 h-16 bg-primary mx-6" />
        <div>{intl.formatMessage({ id: `customersOpinions.items.${name}` })}</div>
      </div>
      <div className="flex flex-col items-end text-text-base">
        <p>{intl.formatMessage({ id: 'shared.pieces' }, { value: count })}</p>
        <p>{formatCurrency(price * count)}</p>
      </div>
    </ItemWithBorder>
  );
};

export default Offer;
