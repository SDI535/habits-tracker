const { User } = require("../models");

module.exports = {
  register: async (name, email, password) => {
    let result = {
      success: true,
      message: null,
      status: null,
      data: null,
    };

    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        result.message = "Email already existed!";
        result.status = 500;
        result.success = false;
        return result;
      } else {
        const newUser = await User.create({ name, email, password });
        result.message = "Email registered successfully!";
        result.status = 201;
        result.data = newUser;
        return result;
      }
    } catch (error) {
      result.success = false;
      result.message = error.message;
      result.status = 400;
      return result;
    }
  },
};
