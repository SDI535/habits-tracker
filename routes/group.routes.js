const express = require("express");
const router = express.Router();
const GroupController = require("../controllers/group.controller");
const UserGroupController = require("../controllers/usergroup.controller");

const groupcontroller = new GroupController();
const UserGroupController = new UserGroupController();

//middleware to verify before information can be accessed
const verifyToken = require("../middleware/userauth.middleware");

//CREATE one group
// router.post("/:userId/groups", verifyToken, groupcontroller.createOne); //Original

router.post("/:userId/groups", groupcontroller.createOne);

// //DELETE one group
// router.delete(
//   "/:userId/groups/:groupId",
//   verifyToken,
//   groupcontroller.deleteOne
// );

// //UPDATE one group
// router.put("/:userId/groups/:groupId", verifyToken, groupcontroller.updateOne);

module.exports = router;
