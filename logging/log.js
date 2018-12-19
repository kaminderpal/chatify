const fs = require('fs');
const path = require('path');

const logger = (req,res,next) => {
     let date = new Date().toString();     
     fs.appendFileSync(path.join(__dirname,"logger.txt"),`request from :-${req.hostname + req.path}  at  ${date} \n` );
     console.log(`Request date is  ${date}`);
     next();
}
module.exports = logger;