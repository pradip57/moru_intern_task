const { string } = require("joi");
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    sender_name: {
      type: String,
      required: true,
      min: 4,
    },
    receiver_name: {
      type: String,
      required: true,
      min: 4,
    },
    transaction_date: {
      type: String,
      required: true,
    },
    transaction_time: {
      type: String,
      required: true,
    },
    transaction_amount: {
      type: String,
      required: true,
    },
    transaction_remarks: {
      type: String,
      required: true,
    },
    transaction_screenshot: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    autoCreate: true,
    autoIndex: true,
  }
);

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;
