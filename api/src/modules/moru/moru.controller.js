const moruServ = require("./moru.service");

class MoruController {
  create = async (req, res, next) => {
    try {
      const payload = moruServ.transformCreateData(req);
      const createdTransaction = await moruServ.store(payload);

      res.json({
        data: createdTransaction,
        message: "Transaction Created Succesfully",
        status: "CREATED",
      });
    } catch (exception) {
      next(exception);
    }
  };

  index = async (req, res, next) => {
    try {
      const data = await moruServ.listAll();

      res.json({
        result: data,
        message: "Transaction Lists",
        status: "LISTED",
      });
    } catch (exception) {
      next(exception);
    }
  };

  get = async (req, res, next) => {
    try {
      const detail = await moruServ.findOne({
        _id: req.params.id,
      });

      res.json({
        result: detail,
        message: "Transaction's detail fetched",
        status: "VIEWED",
      });
    } catch (exception) {
      next(exception);
    }
  };

  update = async (req, res, next) => {
    try {
      const existingData = await moruServ.findOne({ _id: req.params.id });
      const payload = moruServ.transformUpdateData(req, existingData);
      const updateStatus = await moruServ.update(
        { _id: req.params.id },
        payload
      );

      res.json({
        result: updateStatus,
        message: "Transaction's Updated Succesfully",
        status: "UPDATED",
      });
    } catch (exception) {
      next(exception);
    }
  };

  delete = async (req, res, next) => {
    try {
      const status = await moruServ.deleteOne({ _id: req.params.id });

      res.json({
        result: status,
        message: "Transaction deleted Succesfully",
        status: "DELETED",
      });
    } catch (exception) {
      next(exception);
    }
  };
}

const moruCtrl = new MoruController();
module.exports = moruCtrl;
