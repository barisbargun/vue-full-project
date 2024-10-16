import Axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';

import env from '@/constants/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

// api.interceptors.request.use(authRequestInterceptor);
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response.data;
//   },
//   (error: AxiosError) => {
//     // const message = error.response?.data?.message || error.message;

//     if (error.response?.status === 401) {
//       const searchParams = new URLSearchParams();
//       const redirectTo = searchParams.get('redirectTo');
//       window.location.href = `/auth/login?redirectTo=${redirectTo}`;
//     }

//     return Promise.reject(error);
//   },
// );
