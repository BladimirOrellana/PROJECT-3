const router = require("express").Router();
const MiscellaneousController = require("../../controllers/MiscellaneousController");
router.route('/:state')
.get(MiscellaneousController.getProjectsByState);
module.exports = router;
