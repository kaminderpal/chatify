const mongoose = require('mongoose')
const connect = require('../Connection/connect')

let messageSchema = new mongoose.Schema({
     from : {
          required : true,
          type : String
     },
     to : {
          required : true,
          type : String
     },
     dateTime : {
          required : true,
          type : Number
     },
     message : {
          required : true,
          type : String
     },
     participantID : {
          type : mongoose.Schema.Types.ObjectId,
          required: true
     }
});

const Message = mongoose.model('messages',messageSchema);
module.exports = {Message};