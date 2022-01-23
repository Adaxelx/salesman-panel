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
    console.log(req.params);
    const measure = req.url.searchParams.get('measure');
    const timeRange = req.url.searchParams.get('timeRange');
    const previousPeriod = req.url.searchParams.get('previousPeriod') === 'true';
    console.log(measure, previousPeriod);
    let returnedValue = values;
    if (timeRange === 'today') {
      returnedValue = returnedValue.map((data, i) => ({ ...data, name: `${i + 10}-${i + 11}` }));
    } else if (timeRange === 'week') {
      returnedValue = returnedValue.map((data, i) => ({
        actual: data.actual * 6,
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
];
