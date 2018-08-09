import axios from 'axios';

import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333/',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@AirBnbApp:token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default api;
