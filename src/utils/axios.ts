import axios, { AxiosInstance } from 'axios';
import { getItemToStorage } from './storage';
import { DefaultStorageEnum } from '../enum/default-storage.enum';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://172.27.128.1:3000',
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
      const token = await getItemToStorage(DefaultStorageEnum.APP_USER_TOKEN);
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
