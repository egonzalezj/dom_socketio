var socket = io('http://webrtctest2.zapto.org:80');
var t1 = document.getElementById('t1');
/*socket.on('counter', function(counter){
  t1.placeholder = counter;
});*/
var counter = 200;
socket.emit('counter', counter);
