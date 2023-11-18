const { Schema, model } = require("mongoose");

const investmentSchema = Schema({
  date: {
    type: Date,
  },
  amountProduct: {
    type: Number,
  },
  amountSend: {
    type: Number,
  },
  nameClient: {
    type: String,
  },
  numberClient: {
    type: Number,
  },
});

module.exports = model("Investment", investmentSchema);
