const router = require("express").Router();
const QuotesAlgorithmController = require("../../controllers/QuotesAlgorithmController");

// Matches with "/api/quote"
router.route("/").post(QuotesAlgorithmController.quote);

module.exports = router;
