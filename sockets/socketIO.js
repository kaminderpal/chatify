const {generateMessage} = require("../util/message");
const Message = require('../database/Queries/message')

module.exports =  function(io){    
     io.on('connection',(socket)=>{
          console.log('User connected');     
        //   socket.emit('newMessage',generateMessage('Admin','Welcome to Chat App'));
        //   socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined!'));
          socket.on('disconnect',function(){
               console.log('Disconnect from Server.');
           });

           // join user in room where name of room is unique user email for private chat.
           socket.on('join',(data)=>{
               socket.join(data.email);
           });
          socket.on('createMessage',async (message,callback)=>{
               //broadcasting to particaulr user
               let msg = generateMessage(message.from,message.to,message.message);
               let clientMsg = { from : msg.from, to : msg.to, message :msg.message, createdAt : msg.createdAt.format("HH:mm a")  };
    
               socket.to(message.from).emit('newMessage',clientMsg);
            //broadcasting to all in room.
               //    io.emit('newMessage',generateMessage(message.from,message.text));
            
               // now store messages in database.
                const result = await Message.saveMessage(msg);
                callback(clientMsg);
          });
     });
     
}