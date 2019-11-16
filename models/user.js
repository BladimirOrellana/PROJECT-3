const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  phone: String,
  email: { type: String, required: true },
  role: String,
  project: [{ type: Schema.Types.ObjectId, ref: "Project" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
