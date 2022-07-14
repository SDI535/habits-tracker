const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/group.controller");

const groupcontroller = new GroupController();

//middleware to verify before information can be accessed
// const verifyToken = require("../middleware/userauth.middleware");

//CREATE one group
// router.post("/:userId/groups", verifyToken, groupcontroller.createOne);
router.post("/:userId/groups", groupcontroller.createOne);

//DELETE one group
// router.delete("/:userId/groups/:groupId", verifyToken, groupcontroller.deleteOne);
router.delete("/:userId/groups/:groupId", groupcontroller.deleteOne);

//UPDATE one group
// router.put("/:userId/groups/:groupId", verifyToken, groupcontroller.updateOne);
router.put("/:userId/groups/:groupId", groupcontroller.updateOne);

module.exports = router;
