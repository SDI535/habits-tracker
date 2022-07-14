const { UserGroup, User, Group } = require("../models");

module.exports = {
  listMembers: async (groupId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const listmem = await UserGroup.findAll({ where: { group_id: groupId } });
      result.message = "All users of group found!";
      result.status = 200;
      result.data = listmem;
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },

  addOne: async (groupId, userId, email) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const user = await User.findOne({ where: { email } });
      const ownercheck = await UserGroup.findOne({ where: { group_id: groupId, user_id: userId } });
      if (!user) {
        result.success = false;
        result.message = "User not found!";
        result.status = 404;
        return result;
      }
      else if (!ownercheck) {
        result.message = "User is not owner";
        result.status = 500;
        result.success = false;
        return result;
      }
      else if (ownercheck.role = "owner") {
        const newUserGroup = await UserGroup.create({
          group_id: groupId,
          user_id: user.id,
          role: "member",
        });
        result.message = "User added to group successfully!";
        result.status = 201;
        result.data = newUserGroup;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },

  deleteOne: async (groupId, userId, email) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const user = await User.findOne({ where: { email } });
      const ownercheck = await UserGroup.findOne({ where: { group_id: groupId, user_id: userId } });
      if (!user) {
        result.success = false;
        result.message = "User not found!";
        result.status = 404;
        return result;
      }
      else if (!ownercheck) {
        result.message = "User is not owner";
        result.status = 500;
        result.success = false;
        return result;
      }
      else if (ownercheck.role = "owner") {
        const delUserGroup = await UserGroup.destroy({ where: { group_id: groupId, user_id: user.id } });
        result.message = "User deleted from group successfully!";
        result.status = 201;
        result.data = delUserGroup;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },

  updateOne: async (groupId, userId, email, role) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const user = await User.findOne({ where: { email } });
      const ownercheck = await UserGroup.findOne({ where: { group_id: groupId, user_id: userId } });
      if (!user) {
        result.success = false;
        result.message = "User not found!";
        result.status = 404;
        return result;
      }
      else if (!ownercheck) {
        result.message = "User is not owner";
        result.status = 500;
        result.success = false;
        return result;
      }
      else if (ownercheck.role = "owner") {
        const updUserGroup = await UserGroup.findOne({ where: { group_id: groupId, user_id: user.id } });
        updUserGroup.role = role
        await updUserGroup.save();
        result.message = "User's role edited successfully!";
        result.status = 200;
        result.data = updUserGroup;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },

};