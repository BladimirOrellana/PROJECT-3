const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rawMaterialSchema = new Schema({
  materialItem: { type: String, required: true }
});

const RawMaterial = mongoose.model("RawMaterial", rawMaterialSchema);
  
module.exports = RawMaterial;
