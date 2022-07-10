const express = require("express");
const router = express.Router();
const HabitGroupController = require("../controllers/habitgroup.controller");

const habitgroupcontroller = new HabitGroupController();

const verifyToken = require("../middleware/userauth.middleware");

//GET all habits in a group
//need to verify if it's user is in the group, in order to view
router.get("/groups/:groupId/habits", habitgroupcontroller.listHabits);

//ADD one habit to a group
//need middleware to verify if owner or not
//need to verify if it's user is in the group, in order to add habit to group

router.put("/groups/:groupId/habit", habitgroupcontroller.addOne);

//DELETE one habit from a group
//need middleware to verify if owner of habit and in the group, to remove from group
router.delete(
  "/groups/:groupId/habits/:habitId",
  usergroupcontroller.deleteOne
);

module.exports = router;
