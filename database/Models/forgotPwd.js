const mongoose = require('mongoose')

let forgotPwdSchema = new mongoose.Schema({
    email : {
        required : true,
        type : String,
        minlength : 1,
        maxlength : 500,
        trim : true
    },
    token : {
        required : true,
        type : String,
        minlength : 12,
        trim : true
    },
    verified : {
        required : true,
        type : Boolean,
        default : false
    },
    createdAt : {
        required : true,
        type : String
    }
});

const ForgotPwdModel = mongoose.model('ForgotPwd',forgotPwdSchema);
module.exports = {ForgotPwdModel};