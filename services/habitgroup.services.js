const { HabitGroup, Habit } = require("../models");

module.exports = {
  addOne: async (groupId, habitId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const newHabitGroup = await HabitGroup.create({
        group_id: groupId,
        habit_id: habitId,
      });
      result.message = "Habit added to group successfully!";
      result.status = 201;
      result.data = newHabitGroup;
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
  listHabits: async (groupId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const newHabitGroup = await HabitGroup.findAll({
        where: {group_id: groupId},
      });
      result.message = "Listing all habits in this group";
      result.status = 201;
      result.data = newHabitGroup;
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
  deleteOne: async (groupId, habitId, userId) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };
    try {
      const checkUser = await Habit.findOne({
        where: { id: habitId }
      });
      console.log(checkUser);
      if (checkUser.user_id !== userId) {
        result.message = "User is not owner of this habit";
        result.status = 500;
        result.success = false;
      } else {
        const deleteHabit = await HabitGroup.destroy ({ where: { habit_id: habitId } })
        result.message = "Habit is removed from group successfully";
        result.status = 201;
        result.data = deleteHabit;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
    }
    return result;
  },
};
