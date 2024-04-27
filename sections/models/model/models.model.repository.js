const BaseRepository = require('../../../services/database/mysql/Base_Repository/Base.repository');
const Models = require('./models.model');

class ModelsRepository extends BaseRepository{
    constructor(){
        super(Models);
    }
}

module.exports = ModelsRepository;