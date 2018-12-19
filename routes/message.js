const router = require('express').Router();
const passport = require('passport');
const _ = require('lodash');
const Message = require('../database/Queries/message');

router.post("/",passport.authenticate('jwt',{session:false}), async (req,res)=>{
     try{
          var data = _.pick(req.body,["from","to"]);
          const result = await Message.getMessages(data.from,data.to);
          res.header('Authorization','Bearer' + req.user.token.get("accessToken")).status(200).send({status:200,result: result});
     }catch(e){
          res.status(400).send({errorCode : e.message});
     }
});
module.exports = router;