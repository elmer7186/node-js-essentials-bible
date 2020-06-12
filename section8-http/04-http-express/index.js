/**
 * Express basic implementation
 */
const express = require('express');

const server = express();

server.listen(5000, () => {
    console.log('Server is running on port ' + 5000);
});