const {Router} = require('express');
const router = Router();

const {redirectShow} = require('../public/allFunctions');
const {selectGameInfo, selectTypes, selectRegions} = require('../public/select');
const db = require('../db/index');
const Info = db.info;


async function DeleteInfo(id){
    Info.destroy({
        where:  {
            id: id
        }
    })
    console.log('Объект', id,  'Удален!')
}



router.get('/', async (req, res) => {

    redirectShow(req, res);
})


router.post('/', async (req, res) => {
    const path = req.body;
    if (path.btn == 'delete'){
        DeleteInfo(path.id);

    }
    if (path.btn == 'edit'){
        console.log(path.type)
        if (path.reqName == '0'){
            path.reqName = "Нет";
        }
        const oldValues = {
            id: path.id,
            title: path.title,
            description: path.description,
            price: path.price,
            rank: path.rank,
            region: path.region,
            req: path.req,
            type: path.type,
            reqName: path.reqName,
            typeName: path.typeName,
            regionName: path.regionName
        }
        const RegionsList = await selectRegions();
        const GameInfoList = await selectGameInfo();
        const TypesList = await selectTypes();
        const req = 123456;
        return res.render('edit', {
            title: 'Редактирование',
            RegionsList,
            GameInfoList,
            TypesList,
            oldValues
        })
    }
    res.redirect(`/show?page=${1}`)
});


module.exports = router;
