const router = require("express").Router();
const articleRoutes = require("./articles");
const apinytRoutes = require("./apinyt");

// NYT routes
router.use("/articles", articleRoutes);

router.use("/nytreact", apinytRoutes);

module.exports = router;
