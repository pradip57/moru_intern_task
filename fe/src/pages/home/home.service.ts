import BaseHttpService from "../../config/http.config";
import { TransactionDataType } from "./moru-digital.create.pages";

class MoruService extends BaseHttpService {
  create = async (data: TransactionDataType) => {
    try {
      const response = await this.postRequest("/", data, { file: true }); //data destruct from response

      return response;
    } catch (exception) {
      throw exception;
    }
  };

  listAllData = async () => {
    try {
      const response = await this.getRequest("/");
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  edit = async (id: string, data: TransactionDataType) => {
    try {
      const response = await this.putRequest(`/${id}`, data, {
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  view = async (id: string) => {
    try {
      const response = await this.getRequest(`/${id}`);
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  delete = async (id: string) => {
    try {
      const response = await this.deleteRequest(`/${id}`, {
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const moruSvc = new MoruService();
export default moruSvc;
