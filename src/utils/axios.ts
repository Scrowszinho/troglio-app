import axios, { AxiosInstance } from 'axios';
import { getItemToStorage } from './storage';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const noSafeUrl = ['/users', '/login'];
    if (noSafeUrl.some((url) => config.url === url)) {
      return config;
    }

    try {
      const token = await getItemToStorage('token');
      console.log(token);

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;