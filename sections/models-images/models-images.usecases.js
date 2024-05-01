const ModelImagesRepository = require("./modal/models-images.repository");

const createModelImagesUseCase = async ({ ...restData }) => {
  try {
    const modelImagesInstance = new ModelImagesRepository();
    const createEntry = await modelImagesInstance.create(restData);
    return createEntry;
  } catch (error) {
    throw Error;
  }
};

const updateModelImagesUseCase = async({id ,updateData})=>{
    try {
        const updatedObjectData = updateData;
        delete updatedObjectData.id;
        const modelImagesInstance = new ModelImagesRepository();
        const updateEntry = await modelImagesInstance.updateById(id , updatedObjectData); 
        return updateEntry
    } catch (error) {
        throw error;
    }
}


module.exports = { createModelImagesUseCase,updateModelImagesUseCase };
