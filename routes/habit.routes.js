const express = require("express");
const router = express.Router();
const HabitController = require("../controllers/habit.controller");

const habitcontroller = new HabitController();

const verifyToken = require("../middleware/userauth.middleware");

//CREATE one habit
router.post("/:userId/habits", habitcontroller.createOne);

// DELETE one habit
router.delete(
  "/:userId/habits/:habitId",
  verifyToken,
  habitcontroller.deleteOne
);

//UPDATE one habit
router.put("/:userId/habits/:habitId", habitcontroller.updateOne);

module.exports = router;
