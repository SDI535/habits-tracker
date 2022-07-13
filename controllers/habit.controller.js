const habitServices = require("../services/habit.services");

class HabitController {
  async createOne(req, res, next) {
    const { title, frequency, endDate } = req.body;
    const { userId } = req.params;

    const result = await habitServices.createOne(
      userId,
      title,
      frequency,
      endDate
    );
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async deleteOne(req, res, next) {
    const { habitId } = req.params;

    const result = await habitServices.deleteOne(
      habitId
    );
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async updateOne(req, res, next) {
    const { title, frequency, endDate } = req.body;

    const { habitId } = req.params;
    const result = await habitServices.updateOne(
      title,
      frequency,
      endDate,
      habitId
    );
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = HabitController;
