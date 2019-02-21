const bcrypt = require('bcryptjs')
const hashPwd = async (password)=> {
    const salt = await bcrypt.salt(10);
    return await bcrypt.hash(password,salt)
}
module.exports = {hashPwd};