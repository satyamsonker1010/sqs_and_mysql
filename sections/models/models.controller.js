const ModelsRepository = require("./model/models.model.repository");
const { modelCreateUseCase } = require("./models.usecases");

const modelsCreateController = async(req,res)=>{
  try {
     const {name,description,price,image,categoryId} = req.body;
     const modelsRepositoryInstance = new ModelsRepository();
     const createModel = await modelCreateUseCase(modelsRepositoryInstance , {name});
     res.status(201).json({message:"Model created" , data:createModel});
  } catch (error) {
     res.status(400).json({message:"Model not created" , error:error})
  }
}


module.exports = {
    modelsCreateController
}