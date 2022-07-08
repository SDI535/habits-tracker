const { DataTypes, Model } = require("sequelize");

const userGroupModel = (sequelize) => {
  class UserGroup extends Model {}
  UserGroup.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    { sequelize, modelName: "UserGroup", tableName: "users_groups" }
  );
};

module.exports = { userGroupModel };
