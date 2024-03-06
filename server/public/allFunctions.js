
const db = require('../db/index');
const Info = db.info;


async function redirectShow(req, res){                  // Рендр страницы show (Используется часто)
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
    });
}


async function insertData(title, description, region, requirements, price, type, rank) {    //функция создания 
    const info = await Info.create({ title: title, description: description, region: region, requirements: requirements, price: price, type: type, rank: rank});
    console.log("Создан объект! Название объекта:", info.title);
}


async function Update(id, title, description, region, requirements, price, type, rank){     // Функция редактирования
    if(price==''){
        price = 0;
    }
    const update = await Info.update({ title: title, description: description, region: region, requirements: requirements, price: price, type: type, rank: rank }, {
         where: {
           id: id,
         },
       });
     console.log(update.id, update.title, "Успешно обновлен!")
 }



module.exports = {redirectShow, insertData, Update}