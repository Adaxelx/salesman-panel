import { UserCredentials } from 'types/user';

import { client } from './client';

export const login = (body: UserCredentials) => {
  return client('login', { body });
};
