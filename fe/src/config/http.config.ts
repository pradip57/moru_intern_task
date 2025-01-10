import axiosInstance from "./axios.config";

export type AxiosConfigType = { file?: boolean; params?: any };
abstract class BaseHttpService {
  #headers = {};
  #params = {};

  getHeaders = (config: AxiosConfigType) => {
    if (config && Object.prototype.hasOwnProperty.call(config, "file")) {
      this.#headers = {
        ...this.#headers,
        "Content-Type": "multipart/form-data",
      };
    }

    if (config && Object.prototype.hasOwnProperty.call(config, "params")) {
      this.#params = {
        ...this.#params,
        ...config.params,
      };
    }
  };

  postRequest = async (
    url: string,
    data: any = {},
    config: AxiosConfigType = {}
  ) => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.post(url, data, {
        headers: { ...this.#headers },
        params: { ...this.#params },
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  getRequest = async (url: string, config: AxiosConfigType = {}) => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.get(url, {
        headers: { ...this.#headers },
        params: { ...this.#params },
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  putRequest = async (
    url: string,
    data: any = {},
    config: AxiosConfigType = {}
  ) => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.put(url, data, {
        headers: { ...this.#headers },
        params: { ...this.#params },
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  patchRequest = async (
    url: string,
    data: any = {},
    config: AxiosConfigType = {}
  ) => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.patch(url, data, {
        headers: { ...this.#headers },
        params: { ...this.#params },
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  deleteRequest = async (url: string, config: AxiosConfigType = {}) => {
    try {
      this.getHeaders(config);
      const response = await axiosInstance.delete(url, {
        headers: { ...this.#headers },
        params: { ...this.#params },
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

export default BaseHttpService;
