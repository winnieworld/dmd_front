"use client";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const useAxiosWithAuth = (): AxiosInstance => {
  const jwt =
    typeof window !== "undefined" ? sessionStorage.getItem("access") : null;
  const axiosInstance = axios.create({
    baseURL: "https://api.dearmydiary.com",
  });

  axiosInstance.interceptors.request.use(
    (config: any) => {
      const token = jwt;
      if (token) {
        config.headers = config.headers || {};
        (
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const statusCode = error.response?.status;
      if (statusCode === 401) {
        error.response.statusText = "Unauthorized";
        error.response.status = 401;
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosWithAuth;
