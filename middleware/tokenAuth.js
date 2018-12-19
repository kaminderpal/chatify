const _ = require('lodash')
const jwt = require('jsonwebtoken')
const {RegisterModel} = require('../database/Models/register')

const authenticate = async (req,res,next) => {
     let token = req.header('x-auth-token');
     if(!token){
          return Promise.reject(new Error("No token provided."))
     }
     try{
          const user = jwt.verify(token,"chat123");
          req.token = token;
          req.user = user;
          next();
     }catch(ex){
          return Promise.reject(new Error("Invalid Token"));
     }
}
module.exports = {authenticate};