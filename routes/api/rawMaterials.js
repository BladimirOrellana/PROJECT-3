const router = require("express").Router();
const RawMaterialsController = require("../../controllers/RawMaterialsController");

// Matches with "/api/rawMaterials"
router
    .route("/")
    .get(RawMaterialsController.findAll)
    .post(RawMaterialsController.create);

// Matches with "/api/rawMaterials/:id"
router
  .route("/:id")
  .get(RawMaterialsController.findById)
  .put(RawMaterialsController.update)
  .delete(RawMaterialsController.remove);

// Matches with "/api/rawMaterials/materialItem/:id"

module.exports = router;
