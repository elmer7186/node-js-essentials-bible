/**
 * Express implementation with routes
 */
const express = require('express');
const fs = require('fs');

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

const server = express();

server.get('/', (req, res) => {
    res.write(home);
    res.end();
});

server.get('/about', (req, res) => {
    res.write(about);
    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on port ' + 8080);
});