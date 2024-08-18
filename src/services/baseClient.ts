import axios, { AxiosInstance } from 'axios';

const baseClient: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// baseClient.interceptors.request.use(
//   config => {
//     const apiKey = import.meta.env.VITE_APP_API_KEY;
//     config.params = { ...config.params, api_key: apiKey };
//     return config;
//   },
//   error => Promise.reject(error)
// );

baseClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default baseClient;
