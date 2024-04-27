const Sequelize = require('sequelize');
const { MYSQL_STRING } = require('../../../config/enviroments/constant');

const sequelize = new Sequelize(MYSQL_STRING , {
    pool:{
        max:10,
        min:0,
        acquire:30000,
        idle:10000
    },
    logging:true,
})

module.exports = sequelize;