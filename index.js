const https = require('https');
const http = require('http');
const fs = require('fs');
const openssl = require('openssl-nodejs')
const express = require('express');

const hostname = '0.0.0.0';
const port_https = 443;
const port_http = 80;

ssl = openssl('openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -batch');

const app = express();

app.use((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
	res.send('🚀 Hello there !');
});

/*const options = {
      key: fs.readFileSync('/var/www/html/selfsigned.key'),
      cert: fs.readFileSync('/var/www/html/selfsigned.crt')};
*/

const httpServer = http.createServer(app);
const httpsServer = https.createServer(ssl, app);

httpServer.listen(port_http, hostname, () => {
	console.log('🚀 HTTP Server running on port 80');
});

httpsServer.listen(port_https, hostname, () => {
	console.log('🚀 HTTPS Server running on port 443');
});
