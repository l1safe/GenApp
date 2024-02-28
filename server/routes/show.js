const {Router} = require('express');
const router = Router();

const db = require('../db/index');

router.get('/', async (req, res) => {

    let api = await fetch('http://localhost:4000/api');
    let content = await api.json();
    content.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    res.render('show', {
        title: 'Просмотр',
        content
    })
})

module.exports = router;
