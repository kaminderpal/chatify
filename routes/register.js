const router = require('express').Router();
const _      = require('lodash');
const {Register} = require('../database/Queries/register');

router.post("/", async (req,res)=>{
     const data = _.pick(req.body,['name','email','password'] );
     try{
          let user = await Register.add(data);
          if(_.isEmpty(user)){
               return res.status(201).send({ message : "User already exist",status:201});
          }
          res.status(200).send({ user : user, message : "You have successfully register",status:200 });
     }catch(e){
          res.status(202).send({message : e.message,status:202})
     }
});
module.exports = router;