const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
      
    db.Project.find()
      .then(result => {
        db.Project.count(function(err, count) {
          if (count == 0) {
            res.json(0);
          } else {
            res.json(result);
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(result => {
        res.status(200).end();
      })

      .catch(err => {
        console.log("CREATE ERR ", err);
        res.json(err);
      });
  },
  findById: function(req, res) {
    db.Project.findOne({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  getProjectsByClienUserId: function(req, res){
    console.log("KKKKKKKKK PROJECTS ID",req.params.userId)
    db.Project.find({userId: req.params.userId})
    .then(result => {
      console.log("RESULT PROJECTS ID",result)
      res.json(result);
      // db.Project.count(function(err, count) {
      //   if (count == 0) {
      //     res.json(0);
      //   } else {
      //     res.json(result);
      //   }
      // });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });

},
getProjectByClientProjectId: function(req, res){
    console.log("KKKKKKKKK PROJECT ID",req.params.projectId)
    db.Project.find({_id: req.params.projectId})
    .then(result => {
      console.log("RESULT PROJECT 777 ID",result)
      res.json(result);
      // db.Project.count(function(err, count) {
      //   if (count == 0) {
      //     res.json(0);
      //   } else {
      //     res.json(result);
      //   }
      // });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
    
}
};
