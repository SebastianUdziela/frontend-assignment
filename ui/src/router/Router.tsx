import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Articles } from '../components/screens/Articles/Articles';
import { RouteUrls } from '../utils/enums';

export const Router = () => (
  <Routes>
    <Route path={RouteUrls.HOME} element={<Articles />} />
  </Routes>
);
