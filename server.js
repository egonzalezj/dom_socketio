var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

//Server info
var hostname = 'webrtctest.zapto.org';
var port = 8080;

var counter = 200;

io.on('connection', function(socket){
  socket.emit('counter', counter);
});

app.use('/', express.static('public'));

app.set('view engine', 'jade');

app.get('/', function(req, res){
    res.render('index'); //change <client page> to the client document
});
http.listen(port, hostname, function(){
    console.log('listening on *:' + port);
});
