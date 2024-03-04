const {Router} = require('express');
const router = Router();

const db = require('../db/index');
const Info = db.info;
const Reg = db.reg;
const Type = db.type;

async function selectRegions() {                
    const results = await Reg.findAll();
        return results.map(item => {
            return {
                id: item.id,
                region: item.region
            };
        });
}

async function selectTypes() {                
    const results = await Type.findAll();
        return results.map(item => {
            return {
                id: item.id,
                typeName: item.typeName
            };
        });
}



async function selectGameInfo() {                
    const results = await Info.findAll();
        return results.map(item => {
            return {
                id: item.id,
                title: item.title
            };
        });
}


async function insertData(title, description, region, requirements, price, type) {
    const info = await Info.create({ title: title, description: description, region: region, requirements: requirements, price: price, type: type});
    console.log("Создан объект! Название объекта:", info.title);
}

router.get('/', async (req, res) => {
    const RegionsList = await selectRegions();
    const GameInfoList = await selectGameInfo();
    const TypesList = await selectTypes();
    res.render('add', {
        title: 'Создание',
        RegionsList,
        GameInfoList,
        TypesList
    })
})

router.post('/', async (req, res) => {
    console.log(req.body)
    if (req.body.requirements == ''){
        req.body.requirements = null;
    }
    insertData(req.body.title, req.body.descr, req.body.region, req.body.requirements, req.body.price, req.body.types);
    
    if (req.body.check == 'on'){
        let api = await fetch('http://localhost:4000/api');
        let content = await api.json();
        content.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        res.render('show', {
            title: 'Просмотр',
            content
        });
    }
    else{
        res.redirect('/add');
    }
})

module.exports = router;