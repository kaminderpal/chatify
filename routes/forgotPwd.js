const router = require('express').Router();
const ForgotPwd = require('../database/Queries/forgotPwd');

router.post("/", async (req,res)=>{
    const { email } = req.body;

    if( email ){
        const user = { email };
        try{
            const data = await ForgotPwd.findUserByEmail(user);
            if(data.length){
                res.status(200).send({message: "success"});
                //send email to user for reset password link.
            }else{
                res.status(404).send({error: "User is not registered yet."})
            }
        }
        catch(error){
            res.status(404).send({error: error.message});
        }
    }else{
        res.status(400).send();
    }
});

module.exports = router;
