const express = require('express');
const path = require('path');



const PORT = 4000;
const app = express();
const data = JSON.stringify([
    {
        id: "1",
        title: "first steap",
        desc: "start new game",
        region: "russia",
        requirements: "none",
        price: 100
    },
    {
        id: "2",
        title: "piypiypiy",
        desc: "tytyty",
        region: "russia",
        requirements: "1",
        price: 100
    },
])



app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log(`path: ${req.path}`);
    console.log(`method: ${req.method}`);
    next();
})

app.get('/achieve', (req, res) => {
    const achievments = [];

    db
        .collection('achieve')
        .find()
        .forEach((achieve) => achievments.push(achieve))
        .then(() => {
            res
                .status(200)
                .json(achievments);
        })
        .catch(() => {
            res
                .status(500)
                .json({ error: "Something goes wrong..." });
        })
});

const createPass = (page) => path.resolve(__dirname, 'pages', `${page}.html`);



app.get('/', (req, res) => {
    res.sendFile(createPass('index'));
});

app.get('/api', (req, res) => {
    res.sendFile(createPass('api'));
    res.end(data);
});

app.use((req, res) => {
    res
    .status(404)
    .sendFile(createPass('error'));
});