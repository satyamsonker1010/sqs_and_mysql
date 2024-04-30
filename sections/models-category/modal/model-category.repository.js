

const BaseRepository = require('../../../services/database/mysql/Base_Repository/Base.repository');
const ModelCategoryModel = require('./model-category.modal');

class ModelCategoryRepository extends BaseRepository{
    constructor(){
        super(ModelCategoryModel);
    }
}

module.exports = ModelCategoryRepository;