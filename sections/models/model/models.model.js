const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../../services/database/mysql/connection");

class Models extends Model {}

Models.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "Primary Key",
    },
    model_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Model Name",
    },
    model_description: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      comment: "Model Description",
    },
    model_gender: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Model Gender",
    },
    model_height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Model Height",
    },
    model_weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Model Weight",
    },
    model_nationality: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Model Nationality",
    },
    model_date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Model Date of Birth",
    },
    model_rank: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Model Rank",
    },
    model_likes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Model Likes",
    },
    model_views: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Model Views",
    },
    model_dislikes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Model Dislikes",
    },
    model_followers: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Model Followers",
    },
    model_rating: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Model Rating",
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Create Time",
      defaultValue: DataTypes.NOW,
    },
    measurements: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Model Measurement",
    },
    isExclusive:{
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    }
  },
  {
    sequelize: sequelize,
    tableName: "models",
    modelName:"models",
    timestamps: false, // Set to true if you want Sequelize to manage createdAt and updatedAt fields
  }
);

Models.sync({ force: false, alter: true });

module.exports = Models;
