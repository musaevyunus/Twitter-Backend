const { Router } = require("express");
const { twitController } = require("../controllers/twits.controllers");

const router = Router();

router.post("/twits", twitController.addTwit);
router.get("/twits", twitController.getTwit);
router.delete("/twits/:id", twitController.delTwit);
router.patch("/twits/:id", twitController.addLikes);

module.exports = router;
