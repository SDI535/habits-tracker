const groupServices = require("../services/group.services");
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
  async listHabits(req, res, next) {
    const { groupId } = req.params;
    const result = await habitGroupServices.listHabits(groupId);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async deleteOne(req, res, next) {
    const { groupId } = req.body;
    const { habitId } = req.params;
    const result = await habitGroupServices.deleteOne(groupId, habitId);
    res.send("deleting");
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = HabitGroupController;
