const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const {Profile} = require('../database/Queries/profile');
const config = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

module.exports  = passport => {
     passport.use( new JWTStrategy(opts, async (jwt_payload,done)=>{
          try{
               const user = await Profile.findUserById(jwt_payload._id);
               if(!user){
                    return done(null,false);
               }
               return done(null,user);
          }catch(e){
               return Promise.reject(new Error('Something went wrong. Please try again.'));
          }
          })  
     );
}