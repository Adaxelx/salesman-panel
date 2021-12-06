import React, { Suspense, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'context/UserContext';
import dayjs from 'dayjs';

import { languageKey } from 'constants/localStorageKeys';
import { LanguageType } from 'types';
import { GlobalStyle } from 'styles/GlobalStyles';
import Navigation from 'features/Navigation';
import Router from 'features/Router';
import MainContainer from 'containers/MainContainer';
import { Loader, ToastContainer } from 'components';
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

const languageDefault = (): LanguageType => {
  const languageLocal = localStorage.getItem(languageKey) as LanguageType | null;

  return (
    languageLocal ||
    (((window.navigator.languages?.find(
      language => language === 'pl-PL' || language === 'en-EN'
    ) as LanguageType) ||
      undefined) ??
      'pl-PL')
  );
};

function Root() {
  const [language, setLanguage] = useState<LanguageType>(() => languageDefault());

  const toggleLanguage = () =>
    setLanguage(prevLanguage => (prevLanguage === 'pl-PL' ? 'en-EN' : 'pl-PL'));

  useEffect(() => {
    dayjs.locale(language);
    localStorage.setItem(languageKey, language);
  }, [language]);

  return (
    <IntlProvider locale={language} messages={flattenMessages(messages[language])}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <GlobalStyle />
          <BrowserRouter>
            <MainContainer>
              <Suspense fallback={<Loader />}>
                <Navigation toggleLanguage={toggleLanguage} language={language} />
                <Router />
              </Suspense>
            </MainContainer>
          </BrowserRouter>
          <ToastContainer />
        </UserProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default Root;
