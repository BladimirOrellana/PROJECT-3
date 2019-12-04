const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    itemMaterial: { type: String },
    itemPrice: { type: mongoose.Decimal128 },
    itemQuantity: {type: mongoose.Decimal128}
 
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
