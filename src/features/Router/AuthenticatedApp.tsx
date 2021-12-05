import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RoutesLinks } from 'types/router';
import { CustomersOpinions, OrderCategories, SalesmanPanel, SalesQuality } from 'views';

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path={RoutesLinks.Dashboard} element={<SalesmanPanel />} />
      <Route path={RoutesLinks.CustomerOpinions} element={<CustomersOpinions />} />
      <Route path={RoutesLinks.OrderCategories} element={<OrderCategories />} />
      <Route path={RoutesLinks.SalesQuantity} element={<SalesQuality />} />
      <Route path="*" element={<Navigate to={RoutesLinks.Dashboard} />} />
    </Routes>
  );
};

export default AuthenticatedApp;
