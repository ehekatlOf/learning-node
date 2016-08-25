var net = require('net');

var server = net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = 0+(date.getMonth()+1).toString();
    var day = date.getDate().toString();
    var hour = 0+date.getHours().toString();
    var minute = date.getMinutes().toString();

    socket.write("" + year + "-" + month + "-" + day + " " + hour + ":" + minute + "\r\n");
    socket.end();

});

server.listen(process.argv[2]);