const mongoose = require('mongoose')
const connect  = require('../Connection/connect');
const bcrypt   = require('bcryptjs');
const {RegisterModel} = require('../Models/register');

async function getUser(data){
     try{
          let user = await RegisterModel.findOne({email:data.email}).select("+password");
          if( !user ){
               return Promise.reject(new Error("Email or Password is invalid"));
          }
          const isSame = await bcrypt.compare( data.password, user.password );
          if(!isSame){
               return Promise.reject(new Error("Email or Password is invalid"));
          }
          const accessToken = user.generateAuthToken();
          var token = { type: 'oauth',accessToken : accessToken }
          return await RegisterModel.findOneAndUpdate({email : data.email},{ '$set' : { token : token }  },{new : true});
     }catch(e){
          return Promise.reject(new Error("Something went wrong. Please try again."));
     }
};

const Login = {getUser};
module.exports = {Login};