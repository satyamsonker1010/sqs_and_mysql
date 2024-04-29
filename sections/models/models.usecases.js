const { modelsImagesQueue } = require("../../services/queue/queueInstance");

const modelCreateUseCase = async(modelsInstance , {...restData})=>{
  try {
     const {bodyData ,imagesData,tags} = restData;

     // Create a category if not available

     // Create a entry of models

     // Send request to sqs

     const createEntry = await  modelsInstance.create(restData);
     const model_id = createEntry?.id;
     // Logic for insert message in the queue
     const insertMessageInQueue =  await modelsImagesQueue.add({name:restData?.model_name,model_id});
     return {createEntry , insertMessageInQueue};
  } catch (error) {
     throw error;
  }
}




module.exports = {modelCreateUseCase}