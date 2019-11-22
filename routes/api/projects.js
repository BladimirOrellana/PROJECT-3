const router = require("express").Router();
const ProjectsController = require("../../controllers/ProjectsController");

router
.route('/')
.get(ProjectsController.findAll)
.post(ProjectsController.create)


router
.route('/:id')
.get(ProjectsController.findById)

router
.route('/client/projects/:userId')
.get(ProjectsController.getProjectsByClienUserId)


router
.route('/client/project/:projectId')
.get(ProjectsController.getProjectByClientProjectId)







module.exports = router;
