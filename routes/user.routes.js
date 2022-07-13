const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const authenticateJWT = require("../middleware/userauth.middleware");

const usercontroller = new UserController();

router.get("/", (req, res) => {
  return res.send("You have reached the landing page of habitsTracker");
});

// CREATE A USER
router.post("/register", usercontroller.register);

//login
router.post("/login", usercontroller.login);

//Testing purposes to retrieve 1 record of user details with auth
router.get("/userDetails", authenticateJWT, usercontroller.userDetails);

// //GET all groups a user belongs to
router.get("/:userId/groups", authenticateJWT, usercontroller.listGroups);

// //GET all habits for a user
router.get("/:userId/habits", authenticateJWT, usercontroller.listHabits);

module.exports = router;
