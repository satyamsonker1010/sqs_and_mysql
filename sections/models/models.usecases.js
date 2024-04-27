const modelCreateUseCase = async(modelsInstance , {...restData})=>{
  try {
     const createEntry = await  modelsInstance.create(restData);
     return createEntry;
  } catch (error) {
     throw error;
  }
}


module.exports = {modelCreateUseCase}