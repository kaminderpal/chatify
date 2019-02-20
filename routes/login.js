const router = require('express').Router();
const _ = require('lodash');
const {Login} = require('../database/Queries/login');

router.post("/",async (req,res)=>{
     var data = _.pick(req.body,['email',"password"]);
     try{
          var result = await Login.getUser(data);
          res.status(200).header('Authorization','Bearer '+ result.token.get('accessToken')).send({user : result,message:'login success',status: 200});
     }catch(e){
          res.status(400).send({message : e.message});
     }
});
module.exports = router;