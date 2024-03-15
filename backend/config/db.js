const sequelize = require('sequelize')
const configs = require('./config')
const dbInstance = new sequelize(
    configs.dbConfig.DB_NAME,
    configs.dbConfig.USERNAME,
    configs.dbConfig.PASSWORD, {
    host: configs.dbConfig.HOST,
    dialect: 'mysql',
    operatorAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = dbInstance