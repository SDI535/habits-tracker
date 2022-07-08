const { DataTypes, Model } = require("sequelize");

const habitGroupModel = (sequelize) => {
  class HabitGroup extends Model {}
  HabitGroup.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
};

module.exports = { habitGroupModel };
