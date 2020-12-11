const { Sequelize } = require('sequelize');
const connection = new Sequelize('db_test', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

module.exports = connection;