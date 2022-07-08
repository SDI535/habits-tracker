const { DataTypes, Model } = require("sequelize");

const habitModel = (sequelize) => {
  class Habit extends Model {}
  Habit.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        field: "end_date",
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
    { sequelize, modelName: "Habit", tableName: "habits" }
  );
};

module.exports = { habitModel };
