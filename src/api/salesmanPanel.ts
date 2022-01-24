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

export const getCustomersOpinions = ({ shopId = '' }: SalesQueryProps) => {
  return client(`salesPanel/${shopId}/customersOpinions`);
};

export const getOffersRanking = ({ shopId = '' }: SalesQueryProps) => {
  return client(`salesPanel/${shopId}/offersRanking`);
};

export const getSalesAdvices = ({ shopId = '' }: SalesQueryProps) => {
  return client(`salesPanel/${shopId}/salesAdvices`);
};

export const getOrders = ({ shopId = '' }: SalesQueryProps) => {
  return client(`salesPanel/${shopId}/orders`);
};
