const sequelize = require("../../../services/database/mysql/connection");
const { DataTypes, Model } = require("sequelize");

class ModelImages extends Model {}

ModelImages.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_xs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_sm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_md: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_lg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_xl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "model_images",
    modelName: "model_images",
    timestamps: false,
  }
);

ModelImages.sync({ force: false, alter: true });
module.exports = ModelImages;
