export {};
const express = require('express');
const server = express();
let port = 5000;
let protocol = require('http');
let httpServer = protocol.createServer(server);
httpServer.listen(port);

console.debug(`Express server at: ${port}`);
