const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('GameInfo', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        title: {
            type: Sequalize.STRING(255),
        },
        description: {
            type: Sequalize.STRING(255),
        },
        region: {
            type: Sequalize.INTEGER(),
        },
        requirements: {
            type: Sequalize.INTEGER(),
        },
        price: {
            type: Sequalize.INTEGER()
        },
        type: {
            type: Sequalize.INTEGER()
        },
        rank: {
            type: Sequalize.INTEGER()
        },    
    }, {
        timestamps: false,
        tableName: 'gameInfo'
    });
}