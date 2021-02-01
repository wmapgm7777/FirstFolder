const { Socket } = require('dgram');
const http = require('http');
const server = http.createServer();

server.on('connection',(Socket) => {

    console.log('New Connection...');
})
server.listen(3000);

console.log('Listening on port 3000....');
