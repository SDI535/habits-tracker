const { DataTypes, Model } = require("sequelize");
const { userModel } = require("./user.model");

const habitModel = (sequelize) => {
  class Habit extends Model {}
  Habit.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
  return Habit;
};

module.exports = { habitModel };
