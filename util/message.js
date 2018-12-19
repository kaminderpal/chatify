const moment = require('moment')

var generateMessage = (from,to,message)=>{
     return {
          from, to, message, createdAt :moment()
     };
};

module.exports = {generateMessage};