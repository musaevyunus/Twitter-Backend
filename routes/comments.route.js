const { Router } = require("express");
const { commentController } = require("../controllers/comments.controllers");

const router = Router();

router.post("/comments", commentController.addCom);
router.get("/comments", commentController.getCom);
router.delete("/comments/:id", commentController.deleteCom);

module.exports = router;
