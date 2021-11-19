import React from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from 'context/UserContext';
import dayjs from 'dayjs';

import { GlobalStyle } from 'styles/GlobalStyles';
import Router from 'features/Router';
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

  return (
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <GlobalStyle />
          <Router />
        </UserProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default Root;
