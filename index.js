var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/api', function(req, res){
  res.json('lighthouse rel:0.0.1');
  console.log('lighthouse rel:0.0.1')
});

io.on('connection', function(socket){
  var id = socket.id
  console.log('user connected', id);
  io.emit('connect');
  socket.emit('connected', id);
  socket.on('disconnect', function(){
    console.log('user disconnected')
  });
  socket.on('sendtoall', (state) => {
    console.log('updating state')
    io.emit('update', state)
  });
  socket.on('broadcast', (state) => {
    console.log('broadcasting state')
    socket.broadcast.emit('update', state)
  });
});

http.listen(port, function(){
  console.log('lighthouse is listening on *:' + port);
});
