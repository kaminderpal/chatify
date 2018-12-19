const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken')
const config = require('../../config/keys');

let registerSchema = new mongoose.Schema({
     name : {
          required : true,
          type : String,
          minlength : 2,
          maxlength : 50
     },
     email : {
          required : true,
          type : String,
          minlength : 1,
          maxlength : 40,
          trim : true
     },
     password : {
          required : true,
          type : String,
          minlength : 8,
          select : false
     },
     avatar : {
        type : String
     },
     token : {
          required : false,
          type : Map,
          of : String 
     }
});
registerSchema.methods.generateAuthToken = function(){
    return  jwt.sign({ _id : this._id }, config.secretKey, { expiresIn : '6h' } );
}
const RegisterModel = mongoose.model('Users',registerSchema);
module.exports = {RegisterModel};