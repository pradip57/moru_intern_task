const moruRoute = require("../modules/moru/moru.route");

const mainRouter = require("express").Router();
mainRouter.use(moruRoute);

module.exports = mainRouter;
