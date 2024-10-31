const sequelize = require('sequelize');

const database = new sequelize('MuOnline', 'sa', '1234', {
    dialect:'mssql',host:'localhost', porta: 1433,
    options: {
        enableArithAbort: false,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
});

database.sync();

module.exports = database;