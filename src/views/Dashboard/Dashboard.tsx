import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { Input } from 'components';

const Dashboard = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const intl = useIntl();

  return (
    <div>
      <h1 className="text-primary">Test</h1>
      <Input
        value={login}
        onChange={setLogin}
        className="mb-2"
        label={intl.formatMessage({ id: 'login.login' })}
      />
      <Input
        value={password}
        onChange={setPassword}
        type="password"
        className="mb-2"
        label={intl.formatMessage({ id: 'login.password' })}
      />
    </div>
  );
};

export default Dashboard;
