const {Router} = require('express');
const router = Router();

const {redirectShow, Update} = require('../public/allFunctions');


router.post('/', async (req, res) => 
{
    Update(req.body.id, req.body.title, req.body.descr, req.body.region, req.body.requirements, req.body.price, req.body.types, req.body.rank)
    redirectShow(req, res);
   
})

module.exports = router;
