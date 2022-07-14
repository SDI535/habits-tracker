const { Habit } = require("../models");

module.exports = {
  createOne: async (userId, title, frequency, endDate) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };

    try {
      const habit = await Habit.create({
        title,
        frequency,
        endDate,
        user_id: userId,
      });

      result.data = habit;
      result.status = 201;
      result.message = "Habit created successfully";
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }

    return result;
  },

  deleteOne: async (habitId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };

    try {
      const habit = await Habit.destroy({
      where: {id: habitId}
    });

      result.data = habit;
      result.status = 201;
      result.message = "Habit deleted successfully";
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400
    }

    return result;
  },

  updateOne: async (title, frequency, endDate, habitId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };

    try {
      const habit = await Habit.update({
        title,
        frequency,
        endDate,
      },{where: {id: habitId}
    }); 

      result.data = habit;
      result.status = 201;
      result.message = "Habit updated successfully";
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }

    return result;
  },
};
