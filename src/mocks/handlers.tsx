import { rest } from 'msw';

import { UserCredentials } from 'types/user';

const values = [
  { actual: 12 },
  { actual: 5 },
  { actual: 60 },
  { actual: 40 },
  { actual: 32 },
  { actual: 26 },
  { actual: 13 },
];

const values2 = [
  { actual: 22 },
  { actual: 40 },
  { actual: 100 },
  { actual: 20 },
  { actual: 73 },
  { actual: 36 },
  { actual: 10 },
];

const customersOpinions1 = [
  {
    id: 1,
    user: 'user1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue congue',
    rate: 1,
  },
  {
    id: 2,
    user: 'user2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue congue',
    rate: 3,
  },
  {
    id: 3,
    user: 'user3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue congue',
    rate: 1,
  },
  {
    id: 6,
    user: 'user1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue congue',
    rate: 1,
  },
  {
    id: 4,
    user: 'user2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue congue',
    rate: 3,
  },
  {
    id: 5,
    user: 'user3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue congue',
    rate: 1,
  },
];

const customersOpinions2 = [
  { id: 1, user: 'user3', description: 'Nic się nie zgadza z opisem.', rate: 2 },
  {
    id: 2,
    user: 'user4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum ut dui consequat congue...',
    rate: 5,
  },
  { id: 3, user: 'user5', description: 'Nic się nie zgadza z opisem.', rate: 1 },
];

const offersRankingCommon = [
  { id: 1, name: 'mouse', count: 22, price: 50 },
  { id: 2, name: 'mouse', count: 12, price: 50 },
  { id: 3, name: 'mouse', count: 8, price: 50 },
  { id: 4, name: 'mouse', count: 7, price: 50 },
  { id: 5, name: 'mouse', count: 6, price: 50 },
];

const offersRankingLeast = [
  { id: 1, name: 'mouse', count: 1, price: 50 },
  { id: 2, name: 'mouse', count: 2, price: 50 },
  { id: 3, name: 'mouse', count: 3, price: 50 },
  { id: 4, name: 'mouse', count: 4, price: 50 },
  { id: 5, name: 'mouse', count: 5, price: 50 },
];

const salesAdvices = [
  {
    id: 1,
    content:
      'Aby zwiększyć sprzedaż warto jest zainwestować w reklamę własnej firmy oraz wybranych ofert.',
  },
  {
    id: 2,
    content:
      'Social media to obecnie jeden z lepszych sposobów prowadzenia reklamy, warto zatrudnić specjalistę ds. social mediów.',
  },
  {
    id: 3,
    content:
      'Przy spadku obrotu, zanim podejmie się drastyczne środki najlepiej jest wykonać analizę rynku i sprawdzić co spowodowało obecną sytuację.',
  },
  {
    id: 4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  },
];

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (req, res, ctx) => {
    const { login, password } = req.body as UserCredentials;
    console.log(login, password);
    if (login === 'admin' && password === 'admin') {
      return res(
        ctx.status(200),
        ctx.json({
          token: '123',
          user: {
            firstName: 'Jan',
            lastName: 'Kowalski',
            shops: ['S001', 'S002'],
          },
          message: 'login.success',
        })
      );
    }
    return res(ctx.status(401), ctx.text('login.wrongCredentials'));
  }),
  rest.get('/salesPanel/:shopId/salesRaport', (req, res, ctx) => {
    const { shopId } = req.params;

    const timeRange = req.url.searchParams.get('timeRange');
    const previousPeriod = req.url.searchParams.get('previousPeriod') === 'true';

    let returnedValue = shopId === 'S001' ? values : values2;
    if (timeRange === 'today') {
      returnedValue = returnedValue.map((data, i) => ({ ...data, name: `${i + 10}-${i + 11}` }));
    } else if (timeRange === 'week') {
      returnedValue = returnedValue.map((data, i) => ({
        actual: data.actual * 10,
        name: i,
      }));
    } else if (timeRange === 'year') {
      returnedValue = returnedValue.map((data, i) => ({
        actual: data.actual * 32,
        name: i,
      }));
    }
    if (previousPeriod) {
      returnedValue = returnedValue.map((data, i) => ({
        ...data,
        previous: returnedValue[values?.length - 1 - i].actual,
      }));
    }
    return res(ctx.status(200), ctx.json(returnedValue));
  }),
  rest.get('/salesPanel/:shopId/customersOpinions', (req, res, ctx) => {
    const { shopId } = req.params;

    return res(
      ctx.status(200),
      ctx.json(shopId === 'S001' ? customersOpinions1 : customersOpinions2)
    );
  }),
  rest.get('/salesPanel/:shopId/offersRanking', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ common: offersRankingCommon, least: offersRankingLeast })
    );
  }),
  rest.get('/salesPanel/:shopId/salesAdvices', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(salesAdvices));
  }),
  rest.get('/salesPanel/:shopId/orders', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, type: 'unpaid', count: 3 },
        { id: 2, type: 'notSend', count: 8 },
        { id: 3, type: 'returns', count: 2 },
      ])
    );
  }),
];
