const Sequalize = require('sequelize');

const sequalize = new Sequalize('std_2068_nodeserver',
 'std_2068_nodeserver', 
 'Qwerty123',
{
 host: 'std-mysql.ist.mospolytech.ru',
 dialect: 'mysql',
 charset: 'utf8mb4'
});

const Info = require('./GameInfo')(sequalize);
const Region = require('./Regions')(sequalize);
const Types = require('./Types')(sequalize);

module.exports = {
    sequalize : sequalize, 
    info : Info,
    reg : Region,
    type : Types

}