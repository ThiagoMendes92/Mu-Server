const sequelize = require('sequelize');

const database = new sequelize('BaseNodeAula', 'sa', '1234', {
    dialect:'mssql',host:'localhost',porta:1433
});

database.sync();

module.exports = database;