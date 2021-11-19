import React, { useEffect, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import dayjs from 'dayjs';

import { login } from 'api/login';
import { GlobalStyle } from 'styles/GlobalStyles';
import messages, { flattenMessages } from 'translations';

const locale = 'pl-PL';
dayjs.locale('pl');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

function Root() {
  document.body.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const [message, setMessage] = useState('');

  useEffect(() => {
    // TODO: example call - to be removed
    const sendUser = async () => {
      const response = await login({ login: 'admin', password: 'admin' });

      setMessage(response.message);
    };
    sendUser();
  }, []);

  return (
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <div>
          <h1 className="text-primary">Test</h1>
          <div>{message && <FormattedMessage id={message} />}</div>
          {/* example translation */}
        </div>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default Root;
