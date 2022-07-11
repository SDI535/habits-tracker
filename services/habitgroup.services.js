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
      //decode jwt to get decodedToken.id and check if habit belongs to user
      //const  decodedToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
      //const userId = decodedToken.id;
      // const habit = await Habit.findOne({ where: { id: habitId } });
      // if (userId !== habit.user_id) {
      //   result.message = "You are not the owner of this habit!";
      //   result.status = 404;
      //   result.success = false;
      //   return result;
      // }
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
};
