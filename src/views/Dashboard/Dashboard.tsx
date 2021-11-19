import React, { FormEvent, useState } from 'react';
import { useIntl } from 'react-intl';
import { useMutation } from 'react-query';
import { useUser } from 'context/UserContext';

import { login as loginCall } from 'api/login';
import { UserCredentials } from 'types/user';
import { flexCenterAll } from 'styles/classes';
import { Button, Input, Title } from 'components';
interface FormElements extends HTMLFormControlsCollection {
  login: HTMLInputElement;
  password: HTMLInputElement;
}
interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const Dashboard = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useUser();
  const { mutate: loginMutation } = useMutation(
    (credentials: UserCredentials) => loginCall(credentials),
    { onSuccess: ({ token, user }) => dispatch({ type: 'login', payload: { token, user } }) }
  );
  const intl = useIntl();

  const handleSubmit = async (event: FormEvent<LoginFormElement>) => {
    event.preventDefault();
    loginMutation({ login, password });
  };

  return (
    <main className={`w-full h-screen bg-background ${flexCenterAll} p-2`}>
      <div className="w-full">
        <Title className="mb-4">{intl.formatMessage({ id: 'login.title' })}</Title>
        <form className={`bg-secondary p-4 ${flexCenterAll}`} onSubmit={handleSubmit}>
          <Input
            value={login}
            onChange={setLogin}
            className="mb-2"
            htmlFor="login"
            label={intl.formatMessage({ id: 'login.login' })}
          />
          <Input
            value={password}
            onChange={setPassword}
            type="password"
            className="mb-4"
            htmlFor="password"
            label={intl.formatMessage({ id: 'login.password' })}
          />
          <Button type="submit">{intl.formatMessage({ id: 'login.submitButton' })}</Button>
        </form>
      </div>
    </main>
  );
};

export default Dashboard;
