const sequelize = require('sequelize');

const database = new sequelize('MuOnlineS4', 'THIAGOPC\thiag', '060492', {
    dialect:'mssql',host:'(local)',porta:1433
});

database.sync();

module.exports = database;