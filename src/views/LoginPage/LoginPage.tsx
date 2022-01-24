import React, { FormEvent, useState } from 'react';
import { useIntl } from 'react-intl';
import { useMutation } from 'react-query';
import { useUser } from 'context/UserContext';

import { login as loginCall } from 'api/login';
import { ErrorType } from 'types';
import { User, UserCredentials } from 'types/user';
import { flexCenterAll } from 'styles/classes';
import { Button, Input, Title } from 'components';
import { showToast } from 'components/ToastContainer';

const classWrapper = 'w-full sm:w-2/3 md:w-1/2 lg:w-1/2 2xl:w-1/3 relative';

const background = 'h-full absolute transform';

const backgroundBox = `w-7/12 ${background}`;

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useUser();
  const { mutate: loginMutation } = useMutation<
    { token: string; user: User },
    ErrorType,
    UserCredentials,
    unknown
  >((credentials: UserCredentials) => loginCall(credentials), {
    onSuccess: ({ token, user }) =>
      dispatch({ type: 'login', payload: { token, user, activeShop: user?.shops?.[0] } }),
    onError: error => {
      showToast(intl.formatMessage({ id: error?.message }), { type: 'error' });
    },
  });

  const intl = useIntl();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation({ login, password });
  };

  return (
    <div className={`${flexCenterAll} w-5/6 h-full`}>
      <div className={`${classWrapper} mb-4`}>
        <div className={`${background} w-5/12  bg-tertiary  -translate-y-2`}></div>
        <Title className="mb-4 relative">{intl.formatMessage({ id: 'login.title' })}</Title>
      </div>
      <div className={`${classWrapper}`}>
        <div className={`${backgroundBox} bg-secondary translate-y-2`}></div>
        <div className={`${backgroundBox} right-0 bg-tertiary -translate-y-2`}></div>
        <form className={`p-16 sm:p-24 ${flexCenterAll} relative`} onSubmit={handleSubmit}>
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
    </div>
  );
};

export default LoginPage;
