const router = require("express").Router();
const FenceSidesController = require("../../controllers/FenceSidesController");

// Matches with "/api/fenceSides"
router.route("/").post(FenceSidesController.create);

// Matches with "/api/fenceSides/:id"
router
  .route("/:id")
  .get(FenceSidesController.findById)
  .put(FenceSidesController.update)
  .delete(FenceSidesController.remove);

// Matches with "/api/fenceSides/addGate/:id"
router.route("/addGate/:id").put(FenceSidesController.addGate);

module.exports = router;
