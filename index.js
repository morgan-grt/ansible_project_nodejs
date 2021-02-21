const http = require('https');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const options = {
      key: fs.readFileSync('selfsigned.key'),
      cert: fs.readFileSync('selfsigned.crt')};

const server = http.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
