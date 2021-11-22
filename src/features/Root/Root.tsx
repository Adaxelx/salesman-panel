import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from 'context/UserContext';
import dayjs from 'dayjs';

import { LanguageType } from 'types';
import { GlobalStyle } from 'styles/GlobalStyles';
import Navigation from 'features/Navigation';
import Router from 'features/Router';
import { ToastContainer } from 'components';
import messages, { flattenMessages } from 'translations';

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

const languageDefault: LanguageType =
  ((window.navigator.languages?.find(
    language => language === 'pl-PL' || language === 'en-EN'
  ) as LanguageType) ||
    undefined) ??
  'pl-PL';

function Root() {
  const [language, setLanguage] = useState<LanguageType>(languageDefault);

  const toggleLanguage = () =>
    setLanguage(prevLanguage => (prevLanguage === 'pl-PL' ? 'en-EN' : 'pl-PL'));

  useEffect(() => {
    dayjs.locale(language);
  }, [language]);

  return (
    <IntlProvider locale={language} messages={flattenMessages(messages[language])}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <GlobalStyle />
          <Navigation toggleLanguage={toggleLanguage} language={language} />
          <Router />
          <ToastContainer />
        </UserProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default Root;
