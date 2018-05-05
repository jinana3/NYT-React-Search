const router = require("express").Router();
const articleController = require("../../controllers/apiController");

// Matches with "/api/nytreact"
router
  .route("/")
  .get(articleController.findAll);

module.exports = router;
