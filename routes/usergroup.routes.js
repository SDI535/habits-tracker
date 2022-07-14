const express = require("express");
const router = express.Router();
const UserGroupController = require("../controllers/usergroup.controller");

const usergroupcontroller = new UserGroupController();

const verifyToken = require("../middleware/userauth.middleware");

//GET all members in a group
// router.get("/groups/:groupId/members", usergroupcontroller.listMembers);

//ADD one member to a group
router.post("/groups/:groupId/members", usergroupcontroller.addOne);

//DELETE one member from a group
// router.delete(
//   "/groups/:groupId/members/:memberId",
//   usergroupcontroller.deleteOne
// );

// //UPDATE role of member in a group
// router.put("/groups/:groupId/members/:memberId", usergroupcontroller.updateOne);

module.exports = router;
