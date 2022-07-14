const express = require("express");
const router = express.Router();
const HabitController = require("../controllers/habit.controller");
const authenticateJWT = require("../middleware/userauth.middleware");

const habitcontroller = new HabitController();

//CREATE one habit
router.post("/:userId/habits", authenticateJWT, habitcontroller.createOne);

// DELETE one habit
router.delete("/:userId/habits/:habitId", authenticateJWT, habitcontroller.deleteOne);

//UPDATE one habit
router.put("/:userId/habits/:habitId", authenticateJWT, habitcontroller.updateOne);

module.exports = router;
