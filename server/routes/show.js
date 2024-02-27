const {Router} = require('express');
const router = Router();

const db = require('../db/index');
const Info = db.info;
const Reg = db.reg;
const Type = db.type;


// async function selectALLGameInfoForShow() {         
//     Info.belongsTo(Type, {foreignKey: 'type'});
//     Info.belongsTo(Reg, {foreignKey: 'region'});
//     Info.belongsTo(Info, {as: 'reqInfo', foreignKey: 'requirements'});
//     const results = await Info.findAll({
//         attributes: ['id', ['title', 'name'], 'description', 'price', ['region', 'region_id'], ['requirements', 'req_id'], 'type'],
//       include: [
//         {
//           model: Info,
//           as: 'reqInfo',
//           attributes: ['title']
//         },
//         {
//             model: Reg,
//             attributes: ['region']
//         },
//         {
//           model: Type,
//             attributes: ['typeName']
//         }
//       ]
//     });
    
//         return results.map(item => {
//             // if ( item.reqInfo == null){
//             //   item.reqInfo = {title: 0};
//             // };
//             // console.log(item.reqInfo)
//             return {
//                 id: item.id,
//                 title: item.dataValues.name,
//                 description: item.description,
//                 region: item.Region.region,
//                 // requirements: item.reqInfo.title,
//                 reqID: item.dataValues.req_id,
//                 regID: item.dataValues.region_id,
//                 price: item.price,
//                 type_ID: item.type,
//                 typeName: item.Type.typeName

//             };
//         });
// }


// 
router.get('/', async (req, res) => {
    // const GameInfoList = await selectALLGameInfoForShow();
    res.render('show', {
        title: 'Просмотр',
        // GameInfoList
    })
})

module.exports = router;
