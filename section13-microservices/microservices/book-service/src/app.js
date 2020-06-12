const express = require('express');
const app = express();

const response = {
    data: [],
    services: "Book service",
    architecture: "Microservice"
};

const logger = (message) => console.log(`[ Book service ]: ${message}`);

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/books', (req, res) => {
    response.data.push(
        'Pramagtic programer',
        'Clean code',
        'Efective C#'
    );
    logger("Get book data");
    return res.send(response);
});

module.exports = app;