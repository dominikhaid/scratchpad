"use strict";
exports.__esModule = true;
var express = require('express');
var server = express();
var port = 5000;
var protocol = require('http');
var httpServer = protocol.createServer(server);
httpServer.listen(port);
console.debug("Express server at: " + port);
//# sourceMappingURL=http_server.js.map