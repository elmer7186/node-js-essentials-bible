/**
 * Basic http server
 */
const http = require('http');

http.createServer((request, response) => {
    response.write("Hello world!");
    response.end();
}).listen(5000);