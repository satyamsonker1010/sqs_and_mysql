const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.SQS_MYSQL_SERVER_PORT;
const MYSQL_STRING = process.env.MYSQL_STRING;
const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_URI = process.env.REDIS_URI;



// Configration function

const redisConfig = {
   PORT:REDIS_PORT , host:REDIS_URI
}

module.exports = {
  MYSQL_STRING,
  PORT,
  REDIS_PORT,
  REDIS_URI,
  redisConfig,
};
