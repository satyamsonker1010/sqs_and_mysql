const BaseRepository = require("../../../services/database/mysql/Base_Repository/Base.repository");
const ModelImages = require("./models-images.model");


class ModelImagesRepository extends BaseRepository {
    constructor(){
        super(ModelImages);
    }
}

module.exports = ModelImagesRepository;