const mongoose = require('mongoose')
const connect = require('../Connection/connect')

let participantSchema = new mongoose.Schema({
     participants : {
          required : true,
          type : Array
     }
});

const Participants = mongoose.model('participants',participantSchema);
module.exports = {Participants};