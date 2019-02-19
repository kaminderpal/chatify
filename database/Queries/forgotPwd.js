const mongoose = require('mongoose');
const {RegisterModel} = require('../Models/register');

const findUserByEmail = async ({email}) => {
    console.log(email);
    try{
        const d =  await RegisterModel.find( {'email' : email } );
        console.log(d);
        return d;

    }catch(err){
        return Promise.reject(new Error(e.message));
    }
};
module.exports = { findUserByEmail };
