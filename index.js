const https = require('https');

const hostname = 'boiling-bastion-62671.herokuapp.com';
const port = 443;

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
    let now = new Date();
    console.log(now);
});
