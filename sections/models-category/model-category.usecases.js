const modelCategoryRepository = require('./modal/model-category.repository');

const modelCategoryUseCase = async({...restData})=>{
    try {
       const modelCategoryInstance = new modelCategoryRepository();
       const createModelCategory = await modelCategoryInstance.create({...restData});
       return createModelCategory;
    } catch (error) {
        throw error;
    }
}

module.exports={modelCategoryUseCase}