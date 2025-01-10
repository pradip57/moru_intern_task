const { uploader, setPath } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const moruCtrl = require("./moru.controller");
const { transactionCreate, transactionUpdate } = require("./moru.dto");

const moruRoute = require("express").Router();

moruRoute
  .route("/")
  .post(
    setPath("screenshots"),
    uploader.single("transaction_screenshot"),
    bodyValidator(transactionCreate),
    moruCtrl.create
  )
  .get(moruCtrl.index);
moruRoute
  .route("/:id")
  .put(
    setPath("screenshots"),
    uploader.single("transaction_screenshot"),
    bodyValidator(transactionUpdate),
    moruCtrl.update
  )
  .get(moruCtrl.get)
  .delete(moruCtrl.delete);

module.exports = moruRoute;
