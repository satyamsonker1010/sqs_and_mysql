const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../services/database/mysql/connection");

class Category extends Model {}

Category.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(1000) },
  value: { type: DataTypes.STRING(1000) },
  cratedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

Category.sync({ focus: false, alter: true });

module.exports = Category;
