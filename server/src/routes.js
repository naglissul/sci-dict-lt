const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAllWords);
router.post("/word", controller.createWord);
router.put("/word", controller.updateWord);
router.delete("/word/:id", controller.deleteWord);
router.post("/init", controller.initDict);

module.exports = router;