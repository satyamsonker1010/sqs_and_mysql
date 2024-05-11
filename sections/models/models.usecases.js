const { modelsImagesQueue } = require("../../services/queue/queueInstance");

const modelCreateUseCase = async(modelsInstance , {...restData})=>{
  try {
     const {bodyData ,imagesData,tags} = restData;

     // Create a category if not available

     // Create a entry of models

     // Send request to sqs

     const createEntry = await  modelsInstance.create(bodyData);
     const model_id = createEntry?.id;
     // Logic for insert message in the queue
     return createEntry
   } catch (error) {
     throw error;
  }
}




module.exports = {modelCreateUseCase}