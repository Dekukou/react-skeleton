import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppLoader from '@/features/AppLoader';

const PublicRoutesWrapper = () => (
  <Suspense fallback={<AppLoader />}>
    <Outlet />
  </Suspense>
);

export default PublicRoutesWrapper;
