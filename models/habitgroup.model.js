const { DataTypes, Model } = require("sequelize");

const habitGroupModel = (sequelize) => {
  class HabitGroup extends Model {}
  HabitGroup.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    { sequelize, modelName: "HabitGroup", tableName: "habits_groups" }
  );
  return HabitGroup;
};

module.exports = { habitGroupModel };
