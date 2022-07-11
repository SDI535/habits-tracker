const { UserGroup, User } = require("../models");

module.exports = {
  addOne: async (groupId, email) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      //decode jwt to get decodedToken.id
      // const userGroup = await UserGroup.findOne({
      //   where: {
      //     groupId: groupId,
      //     user_id: decodedToken.id,
      //     role: "owner",
      //   },
      // });
      // if (!userGroup) {
      //   result.success = false;
      //   result.message = "You are not the owner of this group";
      //   result.status = 401;
      //   result.data = null;
      //   return result;
      // }
      //find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        result.success = false;
        result.message = "User not found!";
        result.status = 404;
        return result;
      }
      const newUserGroup = await UserGroup.create({
        group_id: groupId,
        user_id: user.id,
        role: "member",
      });
      result.message = "User added to group successfully!";
      result.status = 201;
      result.data = newUserGroup;
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
};
