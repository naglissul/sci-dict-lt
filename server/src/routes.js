const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/dict/", controller.getAllWords);
router.post("/dict/word", controller.createWord);
router.put("/dict/word", controller.updateWord);
router.delete("/dict/word/:id", controller.deleteWord);
router.post("/init", controller.initDict);

router.get("/counters/i-was-here", controller.getIWasHereCount);
router.post("/counters/i-was-here/inc", controller.incIWasHereCount);

module.exports = router;