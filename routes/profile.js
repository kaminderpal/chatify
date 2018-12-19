const router = require('express').Router();
const passport = require('passport');
const {Profile} = require('../database/Queries/profile');
 
router.get("/",passport.authenticate('jwt',{session:false}), async (req,res)=>{
     try{
          res.header('Authorization','Bearer' + req.user.token.get('accessToken')).status(200).send(req.user);
     }catch(e){
          res.status(400).send({errorCode : e.message});
     }
});
router.post("/logout",passport.authenticate('jwt',{session:false}), async (req,res) => {
     try{
          const result = await Profile.logOutUserByToken(req.user);
          res.status(200).send( { status : 200, message : 'Log Out success'} );
     }catch(e){
          res.status(400).send({ status : 400, message : e.message });
     }
});
module.exports = router;