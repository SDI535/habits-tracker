const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("./user.routes");
// const habitRoutes = require("./habit.routes");
const groupRoutes = require("./group.routes");
const userGroupRoutes = require("./usergroup.routes");
// const habitGroupRoutes = require("./habitgroup.routes");

app.use(userRoutes);
// app.use(habitRoutes);
app.use(groupRoutes);
app.use(userGroupRoutes);
// app.use(habitGroupRoutes);

module.exports = app;
