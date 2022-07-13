const userServices = require("../services/user.services");

class UserController {
  async register(req, res, next) {
    const { name, email, password } = req.body;
    const result = await userServices.register(name, email, password);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const result = await userServices.login(email, password);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
  //Testing purposes to retrieve 1 record of user details with auth
  async userDetails(req, res, next) {
    const { email } = req.body;
    const result = await userServices.userDetails(email);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }

  async listGroups(req, res, next) {
    const { userId } = req.params;
    const result = await userServices.listGroups(userId);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }

  async listHabits(req, res, next) {
    const { userId } = req.params;
    const result = await userServices.listHabits(userId);
    res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  }
}

module.exports = UserController;
