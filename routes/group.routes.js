const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/group.controller");
const authenticateJWT = require("../middleware/userauth.middleware");

const groupcontroller = new GroupController();

//CREATE one group
// router.post("/:userId/groups", verifyToken, groupcontroller.createOne);
router.post("/:userId/groups", authenticateJWT,groupcontroller.createOne);

//DELETE one group
// router.delete("/:userId/groups/:groupId", verifyToken, groupcontroller.deleteOne);
router.delete("/:userId/groups/:groupId", authenticateJWT,groupcontroller.deleteOne);

//UPDATE one group
// router.put("/:userId/groups/:groupId", verifyToken, groupcontroller.updateOne);
router.put("/:userId/groups/:groupId", authenticateJWT,groupcontroller.updateOne);

module.exports = router;
