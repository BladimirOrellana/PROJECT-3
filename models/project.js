const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  address: { type: String },
  estimatedPrice: [{ type: mongoose.Decimal128 }],
  finalPrice: { type: mongoose.Decimal128 },
  startDate: { type: Date },
  finishDate: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  state: { type: String },
  employerPayments: [{ type: mongoose.Decimal128 }],
  sides: [{ type: Schema.Types.ObjectId, ref: "FenceSide" }],
  miscellaneous: [{ type: Schema.Types.ObjectId, ref: "Miscellaneous" }],
  material: [{ type: Schema.Types.ObjectId, ref: "Material" }]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
