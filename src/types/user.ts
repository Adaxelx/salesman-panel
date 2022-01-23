export type UserCredentials = {
  login: string;
  password: string;
};

export interface User {
  firstName: string;
  lastName: string;
  shops: string[];
}
