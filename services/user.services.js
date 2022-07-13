const { User, UserGroup, Group, Habit } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

module.exports = {
  register: async (name, email, password) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };

    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        result.message = "Email already existed!";
        result.status = 500;
        result.success = false;
        return result;
      } else {
        const saltRounds = 10;

        const passwordHashed = await new Promise((resolve, reject) => {
          bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) {
              console.log(err);
              reject(err);
            }
            console.log("hashed value: ", hash);
            resolve(hash);
          });
        });

        const newUser = await User.create({
          name: name,
          email: email,
          password: passwordHashed,
        });

        result.message = "Email registered successfully!";
        result.status = 201;
        result.data = newUser;
        return result;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
      return result;
    }
  },
  login: async (email, password) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const user = await User.findOne({
        attributes: ["id", "password"],
        where: { email },
      });
      if (user) {
        const retrievedId = user.dataValues.id;
        const retrievedPassword = user.dataValues.password;

        const compare = await new Promise((resolve, reject) => {
          bcrypt.compare(password, retrievedPassword, function (err, result) {
            if (err) {
              console.log(err);
              reject(err);
            }
            console.log("result: ", result);
            resolve(result);
          });
        });

        if (compare == false) {
          result.message = `Wrong password. Please re-enter`;
          result.status = 404;
          return result;
        } else {
          const token = jwt.sign(
            { userID: retrievedId },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
          );
          result.message = "Verified user and token successfully created";
          result.status = 201;
          result.data = token;
          return result;
        }
      } else {
        result.message = "Email does not exist. Please register first.";
        result.status = 500;
        result.success = false;
        return result;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
      return result;
    }
  },
  //Testing purposes to retrieve 1 record of user details with auth
  userDetails: async (email) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };

    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        result.message = "Successfully retrieved record!";
        result.status = 201;
        result.data = user;
        return result;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
      return result;
    }
  },
  listGroups: async (userId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const groups = await Group.findAll({
        include: [{ model: UserGroup, where: { user_id: userId } }],
      });
      if (groups) {
        result.message = "Successfully retrieved groups!";
        result.status = 201;
        result.data = groups;
        return result;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
      return result;
    }
  },
  listHabits: async (userId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const habits = await Habit.findAll({
        where: { user_id: userId },
      });
      if (habits) {
        result.message = "Successfully retrieved habits!";
        result.status = 201;
        result.data = habits;
        return result;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
      return result;
    }
  },
};
