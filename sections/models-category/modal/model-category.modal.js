const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../../services/database/mysql/connection');


class ModelCategoryModel extends Model{}

ModelCategoryModel.init({
   id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
   },
   model_id:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   category_id:{
    type:DataTypes.INTEGER,
    allowNull:false
   },
   created_at:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:DataTypes.NOW
   }
},{
    sequelize,
    modelName:'model_category',
    tableName:'model_category',
    timestamps:false
})

ModelCategoryModel.sync({force:false , alter:true});

module.exports = ModelCategoryModel;