const userGroupServices = require("../services/usergroup.services");

class UserGroupController {
  async listMembers(req, res, next) {
    const { groupId } = req.params;
    const result = await userGroupServices.listMembers(groupId);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async addOne(req, res, next) {
    const { groupId, userId } = req.params;
    const { email } = req.body;
    const result = await userGroupServices.addOne(groupId, userId, email);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async deleteOne(req, res, next) {
    const { groupId, userId } = req.params;
    const { email } = req.body;
    const result = await userGroupServices.deleteOne(groupId, userId, email);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async updateOne(req, res, next) {
    const { groupId, userId } = req.params;
    const { email, role } = req.body;
    const result = await userGroupServices.updateOne(groupId, userId, email, role);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = UserGroupController;
