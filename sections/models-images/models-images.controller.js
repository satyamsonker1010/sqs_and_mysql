const { createModelImagesUseCase, updateModelImagesUseCase } = require("./models-images.usecases");

const modelImagesCreateController = async(req,res)=>{
  try {
     const {model_id,image_xs="",image_sm="",image_md="",image_lg="",image_xl=""} = req.body;
     const response = await createModelImagesUseCase({model_id,image_xs,image_sm,image_md,image_lg,image_xl});
     res.status(201).json({message:"Model Images Created",data:response});
  } catch (error) {
     res.status(400).json({message:"Something is wrong",error:error});
  }
}

const modelImagesUpdateController = async(req,res)=>{
try {
    const updateData = req.body;
    const {id} = req.body;
    const response = await updateModelImagesUseCase({id , updateData});
    res.status(200).json({message:"Model Images Updated",data:response});
} catch (error) {
    res.status(400).json({message:"Something is wrong. Model images not update",error:error});
}
}

module.exports={
    modelImagesCreateController,modelImagesUpdateController
}