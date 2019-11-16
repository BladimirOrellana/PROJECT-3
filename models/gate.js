const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const gate = new Schema({
    size: { type: String},
    type: { type: String}
  });
  
  const Gate = mongoose.model("Gate", gate);
  
  module.exports = Gate;