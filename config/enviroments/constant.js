const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.SQS_MYSQL_SERVER_PORT;
const MYSQL_STRING = process.env.MYSQL_STRING;

module.exports = {
    MYSQL_STRING,PORT
}