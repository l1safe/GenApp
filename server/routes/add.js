const {Router} = require('express');
const router = Router();


const {redirectShow, insertData} = require('../public/allFunctions');
const {selectGameInfo, selectTypes, selectRegions} = require('../public/select');


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
    if (req.body.price == ''){
        req.body.price = null;
    }
    if (req.body.rank == ''){
        req.body.rank = null;
    }

    insertData(req.body.title, req.body.descr, req.body.region, req.body.requirements, req.body.price, req.body.types, req.body.rank);
    
    if (req.body.check == 'on'){        
        redirectShow(req, res);
    }
    else{
        res.redirect('/add');
    }
})

module.exports = router;
