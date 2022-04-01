import { Box, Container } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import { Suspense } from 'react';
import RouterLoading from '@/router/RouterLoading';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      position="relative"
    >
      <Header />
      <Box id="main-content" pt={2} flexGrow={1} pb="50px">
        <Container maxWidth="xxl">
          <Suspense fallback={<RouterLoading />}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
