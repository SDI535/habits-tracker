const { DataTypes, Model } = require("sequelize");

const userGroupModel = (sequelize) => {
  class UserGroup extends Model {}
  UserGroup.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
  return UserGroup;
};

module.exports = { userGroupModel };
