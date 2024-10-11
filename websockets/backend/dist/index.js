"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.json({
        msg: "hi from get"
    });
});
const httpServer = app.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on('connection', (ws) => {
    console.log('New WebSocket connection established');
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
    ws.on('message', (data, isBinary) => {
        const message = isBinary ? data : data.toString();
        console.log('Received message:', message);
        wss.clients.forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(message, { binary: isBinary });
            }
        });
    });
    ws.send('Hello! Message From Server!!');
});
