import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

export default config;
