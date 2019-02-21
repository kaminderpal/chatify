const router = require('express').Router();
const ResetPwd = require('../database/Queries/resetPwd');

router.post("/", async (req,res)=>{

    const { email, password, token } = req.body;

    if( !email || !password || !token ){

        try{
            const findUser = await ResetPwd.getUserForgotPwd({email});
            if(!findUser) return Promise.reject(new Error("I dnt know what you looking here"));
            if(findUser.verified) return Promise.reject(new Error("Token already Expired"));
            const status = await ResetPwd.updateVerifyStatusForgotPwdModel({email});
            if(!status) return Promise.reject(new Error("Something Went Wrong."));
            const pwdStatus = await ResetPwd.updateUserPassword({email,password});
            if(!pwdStatus) return Proise.reject(new Error('Something went wrong'));
            res.status(200).send({message : "success"});
        }
        catch(err){
            res.status(404).send({error: err.message});
        }

    }else{
        res.status(400).send();
    }
});
module.exports = router;