const habitGroupServices = require("../services/habitgroup.services");

class HabitGroupController {
  async addOne(req, res, next) {
    const { groupId } = req.params;
    const { habitId } = req.body;
    const result = await habitGroupServices.addOne(groupId, habitId);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = HabitGroupController;
