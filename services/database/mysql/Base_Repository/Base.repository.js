const sequelize = require('../connection');

class BaseRepository{

    constructor(model){
        this.model = model;
    }

    async create(data , transaction=null){
       try {
          const createResponse =await this.model.create(data , {transaction});

          return createResponse.toJSON();
       } catch (error) {
         console.log(error);
         throw error;
       }
    }


    async list({where={} , limit=10 , skip=0 , order=[] , attributes=[] , transaction=null}){
       try {
          const listResponse = await this.model.findAll({
            where:where,
            limit:parseInt(limit) || 10,
            offset:parseInt(skip) || 0,
            order:order,
            attributes:attributes,
            transaction:transaction
          });

          return listResponse ?  listResponse.map(item => item.toJSON()):[];

       } catch (error) {
          console.log(error);
          throw error
       }
    }


    async findById(id , transaction=null){
        try {
            const findByIdResponse = await this.model.findByPk(id , {transaction});
            return findByIdResponse.toJSON();
        } catch (error) {
            throw error;
        }
    }

    async updateById(id ,data, transaction=null){
     try {
        const [updateByIdResponse] = await this.model.update(data , {where:{id},transaction});
        return updateByIdResponse > 0;
     } catch (error) {
        console.error('Error updating record by ID:', error.message);
        throw error;
     }
    }

}

module.exports = BaseRepository;