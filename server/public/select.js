const db = require('../db/index');
const Info = db.info;
const Reg = db.reg;
const Type = db.type;





Info.belongsTo(Type, {foreignKey: 'type'});
Info.belongsTo(Reg, {foreignKey: 'region'});
Info.belongsTo(Info, {as: 'reqID', foreignKey: 'requirements'});
async function selectALLGameInfoForShow() {         
        
        const results = await Info.findAll({
            attributes: ['id', ['title', 'name'], 'description', 'price', ['region', 'region_id'], ['requirements', 'req_id'], 'type', 'rank'],
          include: [
            {
              association: 'reqID',
              attributes: ['title']
            },
            {
                model: Reg,
                attributes: ['region']
            },
            {
              model: Type,
                attributes: ['typeName']
            }
          ]
        }
          );
        
            return results.map(item => {
                if ( item.reqID == null){
                  item.reqID = {title: 0};
                };
                const path = item.dataValues;
                console.log(item.dataValues)
                return {
                    id: path.id,
                    title: path.name,
                    description: path.description,
                    region: item.Region.region,
                    requirements: item.reqID.title,
                    reqID: path.req_id,
                    regID: path.region_id,
                    price: path.price,
                    type_ID: path.type,
                    typeName: item.Type.typeName,
                    rank: path.rank

    
                };
            });
    }



module.exports = {selectALLGameInfoForShow};




