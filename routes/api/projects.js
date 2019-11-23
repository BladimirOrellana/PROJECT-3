const router = require("express").Router();
const ProjectsController = require("../../controllers/ProjectsController");

// Matches with "/api/projects"
router
  .route("/")
  .get(ProjectsController.findAll)
  .post(ProjectsController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(ProjectsController.findById)
  .put(ProjectsController.update)
  .delete(ProjectsController.remove);

// Matches with "/api/projects/addFenceSide/:id"
router.route("/addFenceSide/:id").put(ProjectsController.addFenceSide);

// Matches with "/api/projects/addMiscellaneous/:id"
router.route("/addMiscellaneous/:id").put(ProjectsController.addMiscellaneous);

module.exports = router;
