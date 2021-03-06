const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://gonode:gonode123@ds155203.mlab.com:55203/gonode', {
    useNewUrlParser: true
});
/**/
app.get('/', (req, res) =>{
    return res.send('hello world teste');
});


app.use((req, res, next)=> {
    req.io = io;

    return next(); 
});
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

var Porta = process.env.PORT || 8080
server.listen(Porta)
console.log(':)servidor iniciado na porta ', Porta);
