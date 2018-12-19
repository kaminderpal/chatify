const mongoose = require('mongoose')
const {Message} = require('../Models/message')
const Participants = require('./participants')

async function saveMessage(message){
     try{
          const id = await Participants.getParticipantsID(message);
          const msg = new Message({
               from : message.from,
               to   : message.to,
               dateTime : message.createdAt.valueOf(),
               message : message.message,
               participantID : id
          });
          return await msg.save();
     }catch(e){
          return Promise.reject(new Error(e.message));
     } 
}
async function getMessages(from,to){
     try{
          const id     = await Participants.getParticipantsID({from,to});
          const result = await Message.find( { participantID : id } );
          return result;
     }
     catch(e){
          return Promise.reject(new Error(e.message));
     }
}
module.exports = {saveMessage,getMessages};