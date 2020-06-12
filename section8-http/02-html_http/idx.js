/**
 * Html + Http
 * 
 * Create server http with html files returned in services
 */
const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': "text/html" });
    response.write(html);
    response.end();
}).listen(5000);