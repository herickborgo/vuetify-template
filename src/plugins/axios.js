import Vue from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

Plugin.install = () => {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get: () => axiosInstance,
    },
    $axios: {
      get: () => axiosInstance,
    },
  });
};

Vue.use(Plugin);

export default Plugin;
