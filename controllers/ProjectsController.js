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
 
    db.Project.find({userId: req.params.userId})
    .then(result => {
    if(result){
      console.log("QUOTE data")
      res.json(result);
    }else{
      console.log("QUOTE data")
      res.json(result);
    }
      
     
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });

},
getProjectByClientProjectId: function(req, res){
    
    db.Project.find({_id: req.params.projectId})
    .then(result => {
     
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
