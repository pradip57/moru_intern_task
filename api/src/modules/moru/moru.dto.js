const joi = require("joi");

const transactionCreate = joi.object({
  sender_name: joi.string().required().min(4),
  receiver_name: joi.string().required().min(4),
  transaction_date: joi.string().required(),
  transaction_time: joi.string().required(),
  transaction_amount: joi.string().required(),
  transaction_remarks: joi.string().required(),
  transaction_screenshot: joi.string().optional()
  
});

const transactionUpdate = joi.object({
  sender_name: joi.string().required().min(4),
  receiver_name: joi.string().required().min(4),
  transaction_date: joi.string().required(),
  transaction_time: joi.string().required(),
  transaction_amount: joi.string().required(),
  transaction_remarks: joi.string().required(),
  transaction_screenshot: joi.string().optional()
});


module.exports = { transactionCreate, transactionUpdate };
