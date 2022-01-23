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
        actual: data.actual * Math.floor((Math.random() + 1) * 5) + 5,
        name: i,
      }));
    } else if (timeRange === 'year') {
      returnedValue = returnedValue.map((data, i) => ({
        actual: data.actual * Math.floor((Math.random() + 1) * 20) + 10,
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
];
