const dbInstance = require('../config/db')
const { DataTypes } = require('sequelize')
const contants = require('../utils/contants')


const Product = dbInstance.define('product', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED, autoIncrement, allowNull: false
    },

    productName: {
        type: sequelize.STRING
    },
    price: {
        type: sequelize.STRING
    },
    categoryId:{
       type:sequelize.DataTypes.INTEGER,
       allowNull:false 
    },

    description: {
        type: sequelize.STRING
    },

    quantity: {
        type: sequelize.STRING
    },

    rating: {
        type: sequelize.STRING
    },

    status: {
        type: sequelize.STRING,
        defaultValue: contants._status.ACTIVE
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    productTitle:{
        type: sequelize.STRING

    },
    productMrp:{
        type: DataTypes.ARRAY(DataTypes.STRING)

    },
    productColor:{
        type: DataTypes.ARRAY(DataTypes.STRING)

    },
    createdBy: {
        type: DataTypes.INTEGER
    },
    updatedBy: {
        type: DataTypes.INTEGER
    }

}, { timeStamps: true })
// Product.sync({ alter: true })
module.exports = Product