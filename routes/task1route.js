const express = require("express");
const router = express.Router();
const controller = require("../controllers/task1controller")

router.get("/", controller.show);

module.exports = router;