const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const showRoutes = require('./routes/show');
const editRoutes = require('./routes/edit');
const SelectForShow = require('./public/select')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));


const PORT = 4000;

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/show', showRoutes);
app.use('/edit', editRoutes);

const createPass = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.get('/api', async (req, res) => {
    const select = await SelectForShow;
    console.log(select)
    res.sendFile(createPass('api'));
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(select));
})

app.listen(PORT, () => {
    console.log(`Сервер работает на ${PORT} порту`)
});