// import dotenv from "dotenv";
const dotenv = require('dotenv')
dotenv.config();


module.exports = {
    serverConfig: {
        PORT: process.env.PORT
    },
    dbConfig: {
        DB_NAME:process.env.DB_NAME,
        USERNAME:process.env.USERNAME,
        PASSWORD:process.env.PASSWORD,
        HOST:process.env.HOST

    }
}