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
  .get(rawMaterialsController.findById)
  .put(rawMaterialsController.update)
  .delete(rawMaterialsController.remove);

// Matches with "/api/rawMaterials/materialItem/:id"

module.exports = router;
