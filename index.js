const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');

const hostname = '0.0.0.0';
const port_https = 443;
const port_http = 80;

const app = express();

const options = {
      key: fs.readFileSync('selfsigned.key'),
      cert: fs.readFileSync('selfsigned.crt')};

app.use((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
	res.send('Hello there !');
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

httpServer.listen(port_http, hostname, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(port_https, hostname, () => {
	console.log('HTTPS Server running on port 443');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
