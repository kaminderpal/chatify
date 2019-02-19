const mongoose = require('mongoose')

let forgotPwdSchema = new mongoose.Schema({
    email : {
        required : true,
        type : String,
        minlength : 1,
        maxlength : 500,
        trim : true
    }
});

const forgotPwdModel = mongoose.model('ForgotPwd',forgotPwdSchema);
module.exports = {forgotPwdModel};