const express = require("express");
const router = express.Router();
const controller = require("../controllers/task2controller")

router.get("/", controller.show);

module.exports = router;