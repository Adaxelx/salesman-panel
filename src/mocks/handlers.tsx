import { rest } from 'msw';

import { UserCredentials } from 'types/user';

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
          },
          message: 'login.success',
        })
      );
    }
    return res(ctx.status(401), ctx.text('login.wrongCredentials'));
  }),
];
