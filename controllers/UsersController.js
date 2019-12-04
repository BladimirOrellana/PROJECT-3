const db = require("../models");

// Defining methods for User Controllers
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .populate("project")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User.findOne({ email: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findWhere: function(req, res) {
    db.User.find(req.body)
      .populate("project")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .populate("project")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserIdandProjectId: function(req, res) {
    db.User.findById(req.params.userId)
      .populate({
        path: "project",
        populate: {
          path: "sides",
          model: "FenceSide",
          populate: {
            path: "gates",
          model: "Gate",
          }
        }
      })
      .populate({
        path: "project",
        populate: {
          path: "miscellaneous",
          model: "Miscellaneous"
        }
      })
      .populate({
        path: "project",
        populate: {
          path: "material",
          model: "Material"
        }
      })
      .then(result => {
        let machingProject = result.project.filter(project => {
          if (project._id == req.params.projectId) {
            return true;
          }
          return false;
        });

        res.json(machingProject[0]);
      })
      .catch(err => res.status(422).json(err));
  }
};
