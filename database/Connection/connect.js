let mongoose = require('mongoose');
const keys = require('../../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.MONGOLAB_URI,{useNewUrlParser: true})
          .then(()=>{
               console.log("connected to mongodb");
          })
          .catch((err)=>{
               console.log(err);
          })
module.exports = {mongoose};