const { DataTypes, Model } = require("sequelize");

const groupModel = (sequelize) => {
  class Group extends Model {}
  Group.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      groupName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "group_name",
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
    { sequelize, modelName: "Group", tableName: "groups" }
  );
  return Group;
};

module.exports = { groupModel };
