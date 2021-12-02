import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useUser } from 'context/UserContext';

import { RoutesLinks } from 'types/router';
import { CustomersOpinions, Dashboard, OrderCategories, SalesmanPanel, SalesQuality } from 'views';

const Router = () => {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? (
    <Routes>
      <Route path={RoutesLinks.Dashboard} element={<SalesmanPanel />} />
      <Route path={RoutesLinks.CustomerOpinions} element={<CustomersOpinions />} />
      <Route path={RoutesLinks.OrderCategories} element={<OrderCategories />} />
      <Route path={RoutesLinks.SalesQuantity} element={<SalesQuality />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Router;
