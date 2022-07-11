const groupServices = require("../services/group.services");

class GroupController {
  async createOne(req, res, next) {
    const { groupName } = req.body;
    const { userId } = req.params;
    const result = await groupServices.createOne(groupName, userId);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = GroupController;
