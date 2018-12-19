const router = require('express').Router();
const passport = require('passport');
const Contacts = require('../database/Queries/contacts');

router.get("/",passport.authenticate('jwt',{session:false}), async (req,res)=>{
     try{
          var user = req.user;
          var id = req.user._id;
          const result = await Contacts.getContacts(id);
          res.header('Authorization','Bearer' + user.token.get("accessToken")).status(200).send({status:200,result: result});
     }catch(e){
          res.status(400).send({errorCode : e.message});
     }
});
module.exports = router;