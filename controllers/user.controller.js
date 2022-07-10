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
}

module.exports = UserController;
