const bcrypt = require('bcrypt')

exports.hashSyncPass = async (pass) =>{
    return bcrypt.hashSync(pass, 12)
}