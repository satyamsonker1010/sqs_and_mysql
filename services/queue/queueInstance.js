const Queue = require("bull");
const { redisConfig } = require("../../config/enviroments/constant");


const modelsImagesQueue = new Queue("models_images" , {redis:redisConfig});



module.exports= {modelsImagesQueue}