const express = require("express");
const router = express.Router();
const UserGroupController = require("../controllers/usergroup.controller");

const usergroupcontroller = new UserGroupController();

const verifyToken = require("../middleware/userauth.middleware");

//GET all members in a group
router.get(
  "/groups/:groupId/members",
  verifyToken,
  usergroupcontroller.listMembers
);

//ADD one member to a group
//need middleware to verify if group owner or not
router.put("/groups/:groupId/members", usergroupcontroller.addOne);

//DELETE one member from a group
//need middleware to verify if group owner or not, to remove own member or others
router.delete(
  "/groups/:groupId/members/:memberId",
  usergroupcontroller.deleteOne
);

//UPDATE role of member in a group
//need middleware to verify if group owner or not
router.put("/groups/:groupId/members/:memberId", usergroupcontroller.updateOne);

module.exports = router;
