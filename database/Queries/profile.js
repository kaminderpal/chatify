const mongoose = require('mongoose')
const {RegisterModel} = require('../Models/register')
const connect = require('../Connection/connect')

async function findUserById(id){
     try{
          const user = await RegisterModel.findById(id);
          if(!user){
               return Promise.reject(new Error("User doesn't exist")); 
          }
          return user;
     }catch(e){
          return Promise.reject(new Error('Something went wrong. Please try again.'));
     }
}

async function logOutUserByToken(user){
     
     try{
          const result = await RegisterModel.findByIdAndUpdate(user._id, { $set : { token : {} }}, {new : true} );
          if(!result){
               return Promise.reject(new Error("User doesn't exist")); 
          }
          return result;
     }catch(e){
          return Promise.reject(new Error("Something went wrong.. Please try again."));
     }
}
const Profile = {findUserById,logOutUserByToken};
module.exports = {Profile}