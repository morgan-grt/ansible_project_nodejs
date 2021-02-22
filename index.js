const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const greenlock = require('greenlock-express');

const hostname = '0.0.0.0';
const port_https = 443;
const port_http = 80;

const app = express();

app.use((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
	res.send('🚀 Hello there !');
});

greenlock.init({
	packageRoot: __dirname,
    configDir: "./greenlock.d",

    // contact for security and critical bug notices
    maintainerEmail: "none@none.com",

    // whether or not to run at cloudscale
    cluster: false
}).serve(app);

/*const options = {
      key: fs.readFileSync('/var/www/html/selfsigned.key'),
      cert: fs.readFileSync('/var/www/html/selfsigned.crt')};



const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

httpServer.listen(port_http, hostname, () => {
	console.log('🚀 HTTP Server running on port 80');
});

httpsServer.listen(port_https, hostname, () => {
	console.log('🚀 HTTPS Server running on port 443');
});
*/