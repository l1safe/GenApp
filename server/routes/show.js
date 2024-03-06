const {Router} = require('express');
const router = Router();

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

    let api = await fetch('http://localhost:4000/api');
    let content = await api.json();
    /////////////////// Пагинация
    const perPage = 5;
    const page = parseInt(req.query.page) || 1;
    const pages = Math.ceil(content.length / perPage); 
    const pagesMass = []
    for (let i = 0; i < pages; i++){
        pagesMass.push(i+1)
    };
    console.log(pagesMass)
    const start = (page - 1) * perPage;
    const end = page * perPage;
    ///////////////////////////// Конец пагинации
    content.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    const cards = content.slice(start, end)
    res.render('show', {
        title: 'Просмотр',
        cards,
        pagesMass,
        page
    })
})


router.post('/', async (req, res) => {
    if (req.body.btn == 'delete'){
        DeleteInfo(req.body.id);

    }
    res.redirect(`/show?page=${1}`)
});


module.exports = router;
