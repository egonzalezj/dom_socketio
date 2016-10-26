var socket = io('http://webrtctest.zapto.org:8080');
var t1 = document.getElementById('t1');
socket.on('counter', function(counter){
  t1.placeholder = counter;
});
