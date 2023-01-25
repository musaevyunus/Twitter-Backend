const { Router } = require("express");
const { userController } = require("../controllers/users.controllers");

const router = Router();

router.post("/users", userController.addUser);
router.get("/users/:id", userController.getUser);
router.delete("/users/:id", userController.delUser);
router.patch("/users/save/:userid/:twitid", userController.usSaves)

module.exports = router;
