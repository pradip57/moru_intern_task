const TransactionModel = require("./moru.model");

class moruServices {
  transformCreateData = (req) => {
    try {
      const data = {
        ...req.body,
      };

      console.log(data);

      if (!req.file) {
        throw { code: 400, message: "Image is required" };
      } else {
        data.transaction_screenshot = req.file.filename;
      }

      return data;
    } catch (exception) {
      throw exception;
    }
  };

  transformUpdateData = (req, existingData) => {
    try {
      const data = {
        ...req.body,
      };

      console.log(data);

      if (req.file) {
        data.transaction_screenshot = req.file.filename;
      } else {
        data.transaction_screenshot = existingData.image;
      }

      return data;
    } catch (exception) {
      throw exception;
    }
  };

  store = async (data) => {
    try {
      const traansactionData = new TransactionModel(data);
      return await traansactionData.save();
    } catch (exception) {
      throw exception;
    }
  };

  listAll = async () => {
    try {
      const response = await TransactionModel.find();

      return response;
    } catch (exception) {
      throw exception;
    }
  };

  findOne = async (filter) => {
    try {
      const data = await TransactionModel.findOne(filter);
      if (!data) {
        throw { code: 400, message: "Data not found" };
      }
      return data;
    } catch (exception) {
      throw exception;
    }
  };

  update = async (filter, data) => {
    try {
      const updateTransaction = await TransactionModel.findOneAndUpdate(
        filter,
        {
          $set: data,
        }
      );
      return updateTransaction;
    } catch (exception) {
      throw exception;
    }
  };

  deleteOne = async (filter) => {
    try {
      const response = await TransactionModel.findOneAndDelete(filter);
      if (!response) {
        throw { code: 404, message: "Transaction doesnot exists" };
      }
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const moruServ = new moruServices();
module.exports = moruServ;
