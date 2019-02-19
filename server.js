let app = require('express')();
const http = require('http');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = http.createServer(app);
const socketIO = require('socket.io');
const compression = require('compression')
const helmet = require('helmet');

const PORT = process.env.PORT || 5000;
const API_VERSION = "/api/v1.0.0/";


//sockets
let io = socketIO(server);
require('./sockets/socketIO')(io);


//middleware
require('./logging/log');
app.use(helmet());
app.use(bodyParser.json());
app.use(compression());
app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(cors());

app.get("/",(req,res)=>{
     res.sendFile(path.resolve(__dirname,"client/index.html"));
});

//routes 
const login    = require('./routes/login');
const register = require('./routes/register');
const profile  = require('./routes/profile');
const contacts = require('./routes/contacts');
const message  = require('./routes/message');
const participants = require('./routes/participants');
const forgotPwd = require('./routes/forgotPwd');
// const resetPwd  = require('./routes/resetPwd');

// rest api
app.use(API_VERSION + 'login',login);
app.use(API_VERSION + 'register',register);
app.use(API_VERSION + 'profile',profile);
app.use(API_VERSION + 'contacts',contacts);
app.use(API_VERSION + 'messages',message);
app.use(API_VERSION + 'participants',participants);
app.use(API_VERSION + 'forgotpwd',forgotPwd);
// app.use(API_VERSION + 'resetPwd',resetPwd);

//server listner port.
server.listen(PORT, ()=>{
     console.log(`Server is listening at ${PORT}`);
})



