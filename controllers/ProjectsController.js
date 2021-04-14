const db = require("../models");
//This function was created to used multipletimes to get all quotes from client
function getProjetcts(userId, res) {
  db.User.findById(userId)
    .sort({ createdAt: -1 })
    .populate("project")
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.json(result);
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
// Defining methods for the Project Controller
module.exports = {
  getProjectsByClienUserId: function (req, res) {
    getProjetcts(req.params.userId, res);
  },

  getProjectByClientProjectId: function (req, res) {
    db.Project.find({ _id: req.params.projectId })
      .populate({ path: "sides", populate: { path: "gates" } })
      .populate("miscellaneous")
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  upDateStateOfProjectByClientProjectId: function (req, res) {
    db.Project.findOneAndUpdate(
      { _id: req.params.projectId },
      { state: req.body.state }
    )
      .then((result) => {
        if (result) {
          getProjetcts(req.body.userId, res);
        } else {
          res.json({ data: 0 });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  findById: function (req, res) {
    db.Project.findById(req.params.id)
      .populate("miscellaneous")
      .populate({
        path: "sides",
        populate: {
          path: "gates",
          model: "Gate",
        },
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAll: function (req, res) {
    db.Project.find(req.query)
      .sort({ date: -1 })
      .populate("miscellaneous")
      .populate({
        path: "sides",
        populate: {
          path: "gates",
          model: "Gate",
        },
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Project.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("BODY", req.body);
    db.Project.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Project.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addFenceSide: function (req, res) {
    db.Project.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { sides: req.body } },
      { new: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addMiscellaneous: function (req, res) {
    db.Project.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { miscellaneous: req.body } },
      { new: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
