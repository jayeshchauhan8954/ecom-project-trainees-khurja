const dbInstance = require('../config/db')
const sequelize = require("sequelize")

const categories = dbInstance.define('categories', {
    id: { type: sequelize.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, allowNull: false },
    categorieName: {
        type: sequelize.STRING
    },
    type: {
        type: sequelize.STRING
    },
    status: {
        type: sequelize.STRING,
        defaultValue: 'active'
    }
})
// categories.sync({alter:true})
module.exports = categories