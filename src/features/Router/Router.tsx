import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useUser } from 'context/UserContext';

import { CustomersOpinions, Dashboard, OrderCategories, SalesmanPanel, SalesQuality } from 'views';

const Router = () => {
  const {
    state: { token },
  } = useUser();

  //   useEffect(() => {
  //     if (token) {
  //       history.push('/salesman-panel');
  //     }
  //   }, [ token]);

  return token ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SalesmanPanel />} />
        <Route path="/customers-options" element={<CustomersOpinions />} />
        <Route path="/order-categories" element={<OrderCategories />} />
        <Route path="/sales-quality" element={<SalesQuality />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
