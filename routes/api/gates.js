const router = require("express").Router();
const GatesController = require("../../controllers/GatesController");

// Matches with "/api/gates"
router
  .route("/")
  .post(GatesController.create);

// Matches with "/api/gates/:id"
router
  .route("/:id")
  .get(GatesController.findById)
  .put(GatesController.update)
  .delete(GatesController.remove);


module.exports = router;
