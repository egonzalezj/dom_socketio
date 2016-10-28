var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

//Server info
var hostname = 'webrtctest2.zapto.org';
var port = 80;

//var counter = 200;

io.on('connection', function(socket){
  socket.on('counter', function(counter) {
    console.log(counter);
  });
});

app.use('/', express.static('public'));

app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index'); //change <client page> to the client document
});
server.listen(port, hostname, function(){
    console.log('listening on *:' + port);
});
