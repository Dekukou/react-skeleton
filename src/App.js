import React, { useState, Suspense, useMemo, useEffect } from 'react';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { LocalizationProvider } from '@mui/lab';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './router/AppRouter';
import useStore from './store/useStore';
import generateTheme from './theme';
import AppLoader from './features/AppLoader/AppLoader';
import { getAccessToken } from './utils/access_token';
import history from './router/browserHistory';

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const darkTheme = useStore((state) => state.darkTheme);

  const theme = useMemo(
    () => generateTheme(darkTheme ? 'dark' : 'light'),
    [darkTheme],
  );

  useEffect(() => {
    //   if (getAccessToken() === null) {
    //     const { pathname } = history.location;
    //     const redirectTo = pathname !== '/' ? `redirect-to=${pathname}` : '';
    //     history.push(`/login${redirectTo}`);
    //   }
    setLoading(false);
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <AppLoader />
        ) : (
          <>
            <QueryClientProvider client={queryClient}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AppRouter />
              </LocalizationProvider>
            </QueryClientProvider>
            <ToastContainer theme={darkTheme ? 'dark' : 'light'} limit={3} />
          </>
        )}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
