const http = require('http');
const fs = require('fs');
const express = require('express');

const hostname = '0.0.0.0';
const port_http = 80;

const app = express();

app.use((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
	res.send('🚀 Bonjour projet annuel !');
});

const httpServer = http.createServer(app);

httpServer.listen(port_http, hostname, () => {
	console.log('🚀 HTTP Server running on port 80');
});

