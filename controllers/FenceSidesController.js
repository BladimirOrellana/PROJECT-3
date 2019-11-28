const db = require("../models");

// Defining methods for the Fence Sides Controller
module.exports = {
  findById: function(req, res) {
    db.FenceSide.findById(req.params.id)
      .populate("gates")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.FenceSide.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.FenceSide.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.FenceSide.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addGate: function(req, res) {
    db.FenceSide.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { gates: req.body } },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
