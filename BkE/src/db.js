const sequelize = require('sequelize');

const database = new sequelize('MuOnlineS4', 'sa', '123456', {
    dialect:'mssql',host:'localhost',porta:1433
});

database.sync();

module.exports = database;