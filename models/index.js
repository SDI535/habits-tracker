const { Sequelize } = require("sequelize");
const { userModel } = require("./user.model");
const { userGroupModel } = require("./usergroup.model");
const { groupModel } = require("./group.model");
const { habitModel } = require("./habit.model");
const { habitGroupModel } = require("./habitgroup.model");
require("dotenv").config();

let sequelize;

if (process.env.NODE_ENV === "production") {
  //for production
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  //for dev
  sequelize = new Sequelize(process.env.PG_DB, process.env.PG_USERNAME, "", {
    host: process.env.PG_HOST,
    dialect: "postgres",
  });
}

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB has been established successfully");
  } catch (error) {
    console.error("Unable to connect to database", error);
  }
};

const User = userModel(sequelize);
const UserGroup = userGroupModel(sequelize);
const Group = groupModel(sequelize);
const Habit = habitModel(sequelize);
const HabitGroup = habitGroupModel(sequelize);

//Relationships
User.hasMany(Habit);
User.hasMany(UserGroup);
Group.hasMany(UserGroup);
Habit.hasMany(HabitGroup);
Group.hasMany(HabitGroup);

module.exports = {
  sequelize,
  testConnection,
  User,
  UserGroup,
  Group,
  Habit,
  HabitGroup,
};
