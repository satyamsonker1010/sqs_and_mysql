const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../services/database/mysql/connection");

class Category extends Model {}

Category.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(1000) },
    value: { type: DataTypes.STRING(1000) },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    modelName: "category",
    tableName: "category",
    timestamps: false,
  }
);

Category.sync({ focus: false, alter: true });

module.exports = Category;
