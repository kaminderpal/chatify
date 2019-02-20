const router = require('express').Router();
const nanoidGenerator = require('nanoid/generate');
const ForgotPwd = require('../database/Queries/forgotPwd');

router.post("/", async (req,res)=>{
    const { email } = req.body;

    if( email ){
        const user = { email };
        try{
            const data = await ForgotPwd.findUserByEmail(user);
            if(data.length){                
                res.status(200).send({ 
                                        message: data 
                                    });
                const token = await nanoidGenerator('1234567890abcdef',16);
                const model = {email,token};
                const result = await ForgotPwd.saveForgotPwdUser(model);
                // Email.sendMail().catch(console.error);
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
