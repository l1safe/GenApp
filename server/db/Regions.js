const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Regions', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        region: {
            type: Sequalize.STRING(255),
        }
    }, {
        timestamps: false,
        tableName: 'regions'
    });
}