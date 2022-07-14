const express = require("express");
const router = express.Router();
const HabitGroupController = require("../controllers/habitgroup.controller");
const authenticateJWT = require("../middleware/userauth.middleware");

const habitgroupcontroller = new HabitGroupController();

//GET all habits in a group
router.get("/groups/:groupId/habits", authenticateJWT, habitgroupcontroller.listHabits);

//ADD one habit to a group
// need to verify if user is in the group and owner of habit, in order to add habit to group
router.post("/groups/:groupId/habits", authenticateJWT, habitgroupcontroller.addOne);

//DELETE one habit from a group
//need to verify if owner of habit and in the group, to remove from group
router.delete("/groups/:groupId/habits/:habitId", authenticateJWT, habitgroupcontroller.deleteOne);

module.exports = router;
