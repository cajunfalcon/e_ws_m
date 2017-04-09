/* eslint-env node */

module.exports = function() {
  const WebSocketServer = require('ws').Server;
  const socketServer = new WebSocketServer({port: 8080});

  socketServer.on('connection', function(ws) {
    console.log('Someone has connected. ' + ws.upgradeReq.url); // eslint-disable-line no-console

    ws.on('message', function(message) {
      const messageFromClient = JSON.parse(message);
      ws.send(messageFromClient + ' User WebSocketMsg');
    });

    ws.on('close', function() {
      clearInterval(intervalFunction);
    });

    const intervalFunction = setInterval(function(){
      ws.send('Generated WebSocketMsg');
    }, 5000);
  });
};
