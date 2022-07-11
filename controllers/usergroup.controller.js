const userGroupServices = require("../services/usergroup.services");

class UserGroupController {
  async addOne(req, res, next) {
    const { groupId } = req.params;
    const { email } = req.body;
    const result = await userGroupServices.addOne(groupId, email);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = UserGroupController;
