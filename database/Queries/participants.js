const mongoose = require('mongoose')
const {RegisterModel} = require('../Models/register')
const connect = require('../Connection/connect')
const {Participants} = require('../Models/participants')


async function saveParticipants(data){
     try{
          const participants = Participants.findOne({participants : {$all : [ data.from,data.to ]}});
          if(participants){
               return Promise.reject(new Error("Participants already Exists"));
          }
          const participant = new Participants({
               participants : [data.from,data.to]
          });
          return await participant.save();
     }catch(e){
          return Promise.reject(new Error(e.message));
     }
}
async function findParticipants(){
     try{
          const result = Participants.find();
          return result;
     }catch(e){
          return Promise.reject(new Error(e.message));
     }
}
async function getParticipantsID(data){
     try{
          const id = Participants.findOne({participants : {$all : [ data.from,data.to ]}}).select("_id");
          if(id){
               return id;
          }
          const participant = new Participants({
               participants : [data.from,data.to]
          });
          return await participant.save().select("_id");
     }catch(e){
          return Promise.reject(new Error(e.message));
     }
};

module.exports = {saveParticipants,findParticipants,getParticipantsID};