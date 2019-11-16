const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const misc = new Schema({
    description: { type: String},
    amount: { type: mongoose.Decimal128}
  });

  const Miscellaneous = mongoose.model("Misc", misc);
  
  module.exports = Miscellaneous;