const User = require('../models/userModels')
const { hashSyncPass } = require('../utils/utils')
exports.createUser = async (req, res) => {
    try {
        let { userName, email, password, role, products, purchaseHistory } = req.body;
        let newUser = null;
        if (userName && email) {
            let existingUser = await User.findOne({ email, userName })
            if (existingUser) {
                return res.send({ message: "user already exist" })
            }
            else {
                newUser = new User({
                    userName, email, products, purchaseHistory, role,
                    password: await hashSyncPass(password)
                })
            }
        } else {
            if (!userName) {
                return res.send({ message: "username not provided" })
            }
            if (!email) {
                return res.send({ message: "email not provided" })
            }
        }
        let record = await newUser.save()
        res.send({
            message: 'user create successfully',
            status: 200,
            data: record
        })
    } catch (error) {
        return res.send({ message: error.message })
    }
}

/**
 * param@{req,res}
 * **/
//  login controller
exports.createUser = async (req, res) => {
    try {
        let { userName, email, password, role, products, purchaseHistory } = req.body;
        let newUser = null;
        if (userName && email) {
            let existingUser = await User.findOne({ email, userName })
            if (existingUser) {
                return res.send({ message: "user already exist" })
            }
            else {
                newUser = new User({
                    userName, email, products, purchaseHistory, role,
                    password: await hashSyncPass(password)
                })
            }
        } else {
            if (!userName) {
                return res.send({ message: "username not provided" })
            }
            if (!email) {
                return res.send({ message: "email not provided" })
            }
        }
        let record = await newUser.save()
        res.send({
            message: 'user create successfully',
            status: 200,
            data: record
        })
    } catch (error) {
        return res.send({ message: error.message })
    }
}
