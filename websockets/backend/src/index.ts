import express from 'express'
import { WebSocketServer,WebSocket } from 'ws'

const app = express()
app.get('/',function(req,res){
  res.json({
    msg:"hi from get"
  })
})
const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws: WebSocket) => {
  
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
  
  ws.on('message', (data, isBinary) => {
    const message = isBinary ? data : data.toString();
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message, { binary: isBinary });
      }
    });
  });

  ws.send('Hello! Message From Server!!');
});