import axios from "axios";
const BASE_URL =
  process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:5050";
export const api = (baseURL, customHeaders, extendedCustomHeader) => {
  const axiosInstance = axios.create({
    baseURL: baseURL || BASE_URL,

    headers: customHeaders
      ? customHeaders
      : extendedCustomHeader
      ? { "Content-Type": "application/json", extendedCustomHeader }
      : { "Content-Type": "application/json" },
  });

  axiosInstance?.interceptors?.request?.use(
    function (config) {
      config.withCredentials = true;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
