import React, { lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Layout from '@/layout/Layout';
import AuthLayout from '@/layout/AuthLayout';
import RequireAuth from './RequireAuth';
import PublicRoutesWrapper from './PublicRoutesWrapper';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));

const publicRoutes = () => (
  <Route element={<PublicRoutesWrapper />}>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
  </Route>
);

const protectedRoutes = () => (
  <Route element={<RequireAuth />}>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
    </Route>
  </Route>
);

const AllRoutes = () => (
  <Routes>
    {publicRoutes()}
    {protectedRoutes()}
  </Routes>
);

export default AllRoutes;
