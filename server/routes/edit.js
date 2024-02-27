const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('edit', {
        title: 'Редактирование'
    })
})

module.exports = router;
