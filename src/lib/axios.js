import axios from 'axios';
import { getAccessToken } from '@/utils/access_token';
import history from '@/router/browserHistory';

const iaxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

iaxios.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const accessToken = getAccessToken();

  newConfig.headers.Authorization = `Bearer ${accessToken}`;

  return newConfig;
});

iaxios.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      const redirectTo =
        history.location.pathname !== '/'
          ? `?redirect-to=${history.location.pathname}`
          : '';

      history.replace(`/login${redirectTo}`);
    }

    return Promise.reject(error);
  },
);

export default iaxios;
