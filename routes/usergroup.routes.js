const express = require("express");
const router = express.Router();
const UserGroupController = require("../controllers/usergroup.controller");
const authenticateJWT = require("../middleware/userauth.middleware");

const usergroupcontroller = new UserGroupController();

//GET all members in a group
router.get("/groups/:groupId/members", authenticateJWT, usergroupcontroller.listMembers);

//ADD one member to a group
router.post("/groups/:groupId/members/:userId", authenticateJWT, usergroupcontroller.addOne);

//DELETE one member from a group
router.delete("/groups/:groupId/members/:userId", authenticateJWT, usergroupcontroller.deleteOne);

//UPDATE role of member in a group
router.put("/groups/:groupId/members/:userId", authenticateJWT, usergroupcontroller.updateOne);

module.exports = router;
