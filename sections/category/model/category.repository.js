
const categoryModel = require("../model/category.model");
const BaseRepository = require('../../../services/database/mysql/Base_Repository/Base.repository');

class CategoryRepository extends BaseRepository {
    constructor(){
        super(categoryModel);
    }
}


module.exports = CategoryRepository;