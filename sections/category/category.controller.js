const { createCategoryUseCase } = require("./category.usecases");

const createCategoryController = async (req, res) => {
  try {
    const { name, value } = req.body;
    const response = await createCategoryUseCase({
      name: name.toLowerCase(),
      value: value.toLowerCase(),
    });
    res
      .status(200)
      .json({ data: response, message: "Category created successfully." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Category not created.", error: error });
  }
};

module.exports = { createCategoryController };
