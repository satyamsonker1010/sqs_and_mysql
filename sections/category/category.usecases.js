const CategoryRepository = require("./model/category.repository");
("");

const createCategoryUseCase = async ({ ...restData }) => {
  try {
    const categoryRepositoryInstance = new CategoryRepository();
    const { name, value } = restData;
    // Select row is already is create or not
    const checkEntryInDb = await categoryRepositoryInstance.findOne({
      where: { name, value },
    });
    if (checkEntryInDb) {
      return checkEntryInDb;
    }
    const createCategory = await categoryRepositoryInstance.create(restData);
    return createCategory;
  } catch (error) {
    throw error;
  }
};

module.exports = { createCategoryUseCase };
