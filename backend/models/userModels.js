const dbInstance = require('../config/db')
const sequelize = require('sequelize')

const User = dbInstance.define('user', {
    id: {
        type: sequelize.DataTypes.INTEGER.UNSIGNED, autoIncrement, allowNull: false
    },
    userName: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    password: {
        type: sequelize.STRING
    },
    role: {
        type: sequelize.STRING
    },
    products: {
        type: sequelize.DataTypes.ARRAY(sequelize.DataTypes.INTEGER)
    },
    purchaseHistory: {
        type: sequelize.DataTypes.ARRAY(sequelize.DataTypes.INTEGER)
    },
    status: {
        type: sequelize.STRING,
        defaultValue: 'active'
    },

}, { timeStamps: true })
// User.sync({alert: true})
module.exports = User
