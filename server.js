let app = require('express')();
const http = require('http');
const path = require('path');

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
     res.sendFile(path.resolve(__dirname,"client/index.html"));
});

server.listen(PORT, ()=>{
     console.log(`Server is listening at ${PORT}`);
})



