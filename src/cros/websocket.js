var io = require('socket.io')(3000);
io.sockets.on('connection', function (client) {
  client.on('message', function (msg) { //监听到信息处理
    console.log('Message Received: ', msg);
    client.send('服务器收到了信息：' + msg);
  });
  client.on("disconnect", function () { //断开处理
    console.log("client has disconnected");
  });
});
console.log("listen 3000...");