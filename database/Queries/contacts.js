const mongoose = require('mongoose')
const {RegisterModel} = require('../Models/register')
const connect = require('../Connection/connect')

async function getContacts(id){
     try{
          return await RegisterModel.find( { '_id' : { $ne : id } }  ).select("-token");
     }catch(e){
          return Promise.reject(new Error(e.message));
     }
}

module.exports = {getContacts};