const mongoose = require('mongoose');
const {ForgotPwdModel} = require('../Models/forgotPwd');
const {RegisterModel} = require('../Models/register');
const {hashPwd} = require('../../util/hash');

const getUserForgotPwd = async ({token}) => {

    try{
        return await ForgotPwdModel.find({token});

    }catch(err){
        return Promise.reject(new Error("Something went wrong."))
    }
}
/**
 * update the user password.
 */
const updateUserPassword = async ({email,password})=>{

    try{
        const pwd = await hashPwd(password);
        return  await RegisterModel.findOneAndUpdate({email},{password: pwd},{upsert: true});
    }
    catch(err){
        return Promise.reject(new Error("Something went wrong."));
    }
}
/**
 * update the verify status of forgot password model.
 */
const updateVerifyStatusForgotPwdModel = async ({email}) => {
    try{
        const user = await ForgotPwdModel.findOneAndUpdate({email},{verified:true},{upsert: true});
        console.log(user);
        return user;
    }   
    catch(err){
        return Promise.reject(new Error("Something went wrong"));
    }

}
module.exports = {getUserForgotPwd,updateVerifyStatusForgotPwdModel,updateUserPassword};