const { modelCategoryUseCase } = require("./model-category.usecases");

const createModelsCategoryController = async(req,res)=>{
    try {
        const {model_id , category_id} = req.body;
        const response = await modelCategoryUseCase({model_id,category_id});
        res.status(201).json({data:response , message:"Model category entry created successfully."});
    } catch (error) {
        res.status(400).json({message:"Model category not created" , error:error});
    }
}

module.exports={createModelsCategoryController};