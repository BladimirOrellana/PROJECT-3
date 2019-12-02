const router = require("express").Router();
const UsersController = require("../../controllers/UsersController");

// Matches with "/api/users"
router
  .route("/")
  .get(UsersController.findAll)
  .post(UsersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(UsersController.findById)
  .put(UsersController.update)
  .delete(UsersController.remove);

// Matches with "/api/users/email/:email"
router.route("/email/:email").get(UsersController.findByEmail);

// Matches with "/api/users/where"
router.route("/where").post(UsersController.findWhere);

module.exports = router;
