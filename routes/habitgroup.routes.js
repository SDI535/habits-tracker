const express = require("express");
const router = express.Router();
const HabitGroupController = require("../controllers/habitgroup.controller");

const habitgroupcontroller = new HabitGroupController();

const verifyToken = require("../middleware/userauth.middleware");

//GET all habits in a group
// router.get("/groups/:groupId/habits", habitgroupcontroller.listHabits);

//ADD one habit to a group
// need to verify if user is in the group and owner of habit, in order to add habit to group

router.post("/groups/:groupId/habit", habitgroupcontroller.addOne);

//DELETE one habit from a group
//need to verify if owner of habit and in the group, to remove from group
// router.delete(
//   "/groups/:groupId/habits/:habitId",
//   usergroupcontroller.deleteOne
// );

module.exports = router;
