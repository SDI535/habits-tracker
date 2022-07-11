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
      const newGroup = await Group.create({ groupName });
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
};
