import { createQueryString, QueryObject } from 'helpers/query';

import { client } from './client';

type SalesQueryProps = {
  shopId?: string;
  query?: QueryObject;
};

export const getSalesData = ({ shopId = '', query = {} }: SalesQueryProps) => {
  const queryString = createQueryString(query);
  return client(`salesPanel/${shopId}/salesRaport${queryString}`);
};
