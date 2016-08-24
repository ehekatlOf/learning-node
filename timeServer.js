var net = require('net');

var server = net.createServer(function(socket){
    socket.write('hello thar');
});

server.listen(8001);