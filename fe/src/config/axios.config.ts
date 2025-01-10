import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server Time Out",
  headers: {
    "Content-Type": "application/json", 
  },
  responseType: "json",
  responseEncoding: "utf-8",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (exception) => {
    throw exception;
  }
);

export default axiosInstance;
