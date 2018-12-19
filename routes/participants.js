const router = require('express').Router();
const passport = require('passport');
const _ = require('lodash');
const Participants = require('../database/Queries/participants');

router.post("/",passport.authenticate("jwt",{session: false}), async(req,res)=>{
     try{
          const data = _.pick(req.body,['from','to']);
          var result = await Participants.saveParticipants(data);
          res.header('Authorization','Bearer' + req.user.token.get("accessToken")).status(200).send({status:200,result: result});
     }catch(e){
          res.status(400).send({errorCode : e.message});
     }
});
router.get("/",passport.authenticate("jwt",{session: false}), async(req,res)=>{
     try{
          var result = await Participants.findParticipants();
          res.header('Authorization','Bearer' + req.user.token.get("accessToken")).status(200).send({status:200,result: result});
     }catch(e){
          res.status(400).send({errorCode : e.message});
     }
});
module.exports =  router;