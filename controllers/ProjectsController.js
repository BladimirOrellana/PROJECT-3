const db = require("../models");

// Defining methods for the Project Controller
module.exports = {
  findById: function(req, res) {
    db.Project.findById(req.params.id)
      .populate("miscellaneous")
      .populate({
        path: "sides",
        populate: {
          path: "gates",
          model: "Gate"
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Project.find(req.query)
      .sort({ date: -1 })
      .populate("miscellaneous")
      .populate({
        path: "sides",
        populate: {
          path: "gates",
          model: "Gate"
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Project.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Project.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addFenceSide: function(req, res) {
    db.Project.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { sides: req.body } },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addMiscellaneous: function(req, res) {
    db.Project.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { miscellaneous: req.body } },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
