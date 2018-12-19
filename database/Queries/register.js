const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const {RegisterModel} = require('../Models/register')
const connect = require('../Connection/connect')

async function add(data){
     let isExisted =  await RegisterModel.findOne({'email': data.email});
     if(isExisted){ return Promise.reject(new Error("User already exist")) }
     try{
          data.password = await hashPwd(data.password);
          const avatar = gravatar.url(data.email,{
               s : '200', //size
               r : 'pg', //rating
               d : 'mm' // default 
          });
          let register = new RegisterModel({
               name : data.name,
               email : data.email,
               password : data.password,
               avatar : avatar
          });
          return await register.save(); 
     }catch(err){
          return Promise.reject(new Error("Something went wrong. Please try again."));
     }
};
async function hashPwd(pwd){
     const salt = await bcrypt.genSalt(10);
     return  await bcrypt.hash(pwd,salt);
}
const Register = {add};
module.exports = {Register};