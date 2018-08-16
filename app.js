const express = require('express');
const app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

var fs = require("fs");
app.use(express.static(__dirname));
var index = fs.readFileSync('./room.html');



io.on('connection', function (socket) {

    socket.on('auth', function (data) {
        // we tell the client to execute 'new message'
        socket.emit('new message', {
            "name": "123"
        });
    });

});










/*app.get('/', function (req, res) {
    console.log('/');
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.end(index);
});


app.get('/room', function (req, res) {
    console.log('room');
    res.redirect('/');
});*/


app.listen(port, () => console.log('Example app listening on port 3000!'));