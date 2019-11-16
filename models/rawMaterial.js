const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rawMaterial = new Schema({
    name: { type: String}
  });

  const RawMaterial = mongoose.model("rawmaterial", rawMaterial);
  
  module.exports = RawMaterial;