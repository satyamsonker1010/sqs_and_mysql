const CategoryRepository = require("./model/category.repository");''

const createCategoryUseCase = async({...restData})=>{
try {
    const categoryRepositoryInstance = new CategoryRepository();
    const createCategory = await categoryRepositoryInstance.create(restData);
    return createCategory;
} catch (error) {
    throw error;
}
}


module.exports={createCategoryUseCase}