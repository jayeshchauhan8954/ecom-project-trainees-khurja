const User = require('../models/userModels')
const bcrypt = require('bcrypt')
exports.createUser = async (req, res) => {
    let { userName, email, password, role, } = req.body;
    const newuser = new User(
        {
            userName: userName,
            email: email,
            password: bcrypt.hashSync(password, 12
                ),
            role: role

        }
    )
    await newuser.save()
    res.send({
        message: 'user create successfully',
        status: 200,
        data: newuser
    })
}
