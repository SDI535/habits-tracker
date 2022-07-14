const { Group, UserGroup } = require("../models");

module.exports = {
  createOne: async (groupName, userId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const newGroup = await Group.create({ groupName, user_id: userId });
      result.message = "Group created successfully!";
      result.status = 201;
      result.data = newGroup;
      const groupId = newGroup.id;
      const newUserGroup = await UserGroup.create({
        group_id: groupId,
        user_id: userId,
        role: "owner",
      });
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
  deleteOne: async (userId, groupId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const ownercheck = await UserGroup.findOne({ where: { group_id: groupId, user_id: userId } });
      if (!ownercheck) {
        result.message = "User is not owner";
        result.status = 500;
        result.success = false;
        return result;
      }
      else if (ownercheck.role = "owner") {
        const delUserGroup = await UserGroup.destroy({ where: { group_id: groupId } });
        const delGroup = await Group.destroy({ where: { id: groupId } });
        result.message = "Group deleted successfully!";
        result.status = 200;
        result.data = delGroup;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
  updateOne: async (groupName, userId, groupId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const ownercheck = await UserGroup.findOne({ where: { group_id: groupId, user_id: userId } });
      if (!ownercheck) {
        result.message = "User is not owner";
        result.status = 500;
        result.success = false;
        return result;
      }
      else if (ownercheck.role = "owner") {
        const updGroup = await Group.findOne({ where: { id: groupId } });
        updGroup.groupName = groupName
        await updGroup.save();
        result.message = "Group edited successfully!";
        result.status = 200;
        result.data = updGroup;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
};
