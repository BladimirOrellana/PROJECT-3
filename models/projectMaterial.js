const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectMaterial = new Schema({
    unit:{type:String},
    price:{type:mongoose.Decimal128},
    project:{type: Schema.Types.ObjectId, ref:'Project'},
    material:{type: Schema.Types.ObjectId, ref:'rawmaterial'}
  });
  
  const ProjectMaterial = mongoose.model("ProjectMaterial", projectMaterial);
  
  module.exports = ProjectMaterial;