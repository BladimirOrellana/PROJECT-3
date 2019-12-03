const router = require("express").Router();
const MiscellaneousController = require("../../controllers/MiscellaneousController");
router.route('/:state')
.get(MiscellaneousController.getProjectsByState);
router.route('/active/expenses/payment/:quotedId')
.post(MiscellaneousController.addPayment);
router.route('/active/expenses/miscellaneous/:quotedId')
.post(MiscellaneousController.addMiscellaneous);
router.route('/active/expenses/material/:quotedId')
.post(MiscellaneousController.addMaterial);

module.exports = router;
