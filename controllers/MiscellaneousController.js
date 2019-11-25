const db = require("../models");

// Defining methods for the booksController
module.exports = {
    getProjectsByState: function(req,res){
        console.log("STATE",req.params.state)


        db.Project.find({state: req.params.state}).then((result) =>{
            console.log("RESULT",result)
            res.json(result)
        })

    }
};
