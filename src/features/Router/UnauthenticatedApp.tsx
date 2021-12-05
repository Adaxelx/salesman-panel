import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RoutesLinks } from 'types/router';
import { LoginPage } from 'views';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path={RoutesLinks.Dashboard} element={<LoginPage />} />
      <Route path="*" element={<Navigate to={RoutesLinks.Dashboard} />} />
    </Routes>
  );
};

export default UnauthenticatedApp;
