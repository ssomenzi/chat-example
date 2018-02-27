var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/api', function(req, res){
  res.json('lighthouse rel:0.0.1');
});

io.on('connection', function(socket){
  io.emit('connect');
});

http.listen(port, function(){
  console.log('lighthouse is listening on *:' + port);
});
