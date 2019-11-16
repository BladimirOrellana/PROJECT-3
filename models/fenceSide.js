const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fenceSide = new Schema({
  description: { type: String },
  length: { type: mongoose.Decimal128 },
  woodType: { type: String },
  gates: [{ type: Schema.Types.ObjectId, ref: "Gate" }]
});

const FenceSide = mongoose.model("FenceSide", fenceSide);

module.exports = FenceSide;
