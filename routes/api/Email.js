const router = require("express").Router();
const EmeailControler = require("./../../controllers/EmailControllers");



// Matches with "/api/fenceSides/addGate/:id"
router.route("/email").post(EmeailControler.sendEmail);

module.exports = router;