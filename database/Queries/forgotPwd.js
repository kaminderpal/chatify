const moment = require('moment');
const {RegisterModel} = require('../Models/register');
const {ForgotPwdModel} = require('../Models/forgotPwd');

/**
 * Check user exist for this email in register model.
 * @param {email} param0 
 */ 
const findUserByEmail = async ({email}) => {
    try{
        return await RegisterModel.find( {'email' : email } );
    }catch(err){
        return Promise.reject(new Error(e.message));
    }
};
/**
 * Save user data for reset pwd verification.
 * @param {email} user email
 * @param {token} token for verify reset pwd.
 */
const saveForgotPwdUser = async ({email,token}) => {
    const user = {  
                    email,
                    token,
                    createdAt : moment.utc().format()
    };
    try{
        //find by email
        //if not find, then create new user by using option upsert true.
        return await ForgotPwdModel.findOneAndUpdate( { email } , user , { new : true, upsert : true } );
    }
    catch(err){
        return Promise.reject(new Error(err.message));
    }
}



module.exports = { findUserByEmail, saveForgotPwdUser };
