const Sequalize = require('sequelize');

module.exports = function (sequalize) {
    return sequalize.define('Types', {
        id : {
            type: Sequalize.INTEGER(),
            primaryKey: true,
        },
        typeName: {
            type: Sequalize.STRING(255),
        }
    }, {
        timestamps: false,
        tableName: 'types'
    });
}