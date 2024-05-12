const ModelsRepository = require("./model/models.model.repository");
const { modelCreateUseCase } = require("./models.usecases");

const modelsCreateController = async(req,res)=>{
  try {
     const {name , gender,rank,isExclusive,bio,birthday,birthPlace,height,measurements,stats,images , weight,tags} = req.body;
     const bodyData = {
      model_name:name,
      model_description:bio || "",
      model_gender:gender || "other",
      model_height:height || 0,
      model_weight:weight || 0,
      model_nationality:birthPlace || "",
      model_date_of_birth:birthday || "1970-01-01",
      model_rank:rank || -1,
      model_likes:stats?.likes || 0,
      model_views:stats?.views || 0,
      model_dislikes:stats?.dislikes || 0,
      model_followers:stats?.followers || 0,
      model_rating:stats?.rating || 0,
      measurements:measurements || "",
      isExclusive:isExclusive || false
     }

     const imagesData = {
      hdImages:images?.card_main_rect?.["0"]
     }

     const detailsData = {bodyData ,imagesData,tags};
     
     const modelsRepositoryInstance = new ModelsRepository();
     const createModel = await modelCreateUseCase(modelsRepositoryInstance , {...detailsData});
     res.status(201).json({message:"Model created" , data:createModel});
  } catch (error) {
     res.status(400).json({message:"Model not created" , error:error})
  }
}


module.exports = {
    modelsCreateController
}