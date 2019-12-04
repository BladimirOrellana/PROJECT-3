const router = require("express").Router();
const ProjectsController = require("../../controllers/ProjectsController");

router
.route('/')
.get(ProjectsController.findAll)
.post(ProjectsController.create)


// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(ProjectsController.findById)
  .put(ProjectsController.update)
  .delete(ProjectsController.remove);

  // Matches with "/api/projects/client/projects/:userId"
router
.route('/client/projects/:userId')
.get(ProjectsController.getProjectsByClienUserId)

// Matches with "/api/projects/client/project/:projectrId"
router 
.route('/client/project/:projectId')
.get(ProjectsController.getProjectByClientProjectId)
.put(ProjectsController.upDateStateOfProjectByClientProjectId)











// Matches with "/api/projects/addFenceSide/:id"
router.route("/addFenceSide/:id").put(ProjectsController.addFenceSide);

// Matches with "/api/projects/addMiscellaneous/:id"
router.route("/addMiscellaneous/:id").put(ProjectsController.addMiscellaneous);

module.exports = router;
