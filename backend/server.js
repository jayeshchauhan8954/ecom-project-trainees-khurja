const configs = require('./config/config')
const express = require('express')
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const cors = require("cors")
app.use(cors())

const multer = require("multer")()
app.use(multer.any())


app.listen(configs.serverConfig.PORT, () => {
    console.log(`The server is up and running on port : ${configs.serverConfig.PORT}`);
})