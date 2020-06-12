const express = require('express');
const app = express();

const response = {
    data: [],
    services: "Monolithic service",
    architecture: "Monolithic"
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v1/users', (req, res) => {
    response.data.push(
        'Elmer',
        'Marluan',
        'Alexis'
    );
    return res.send(response);
});

app.get('/api/v1/books', (req, res) => {
    response.data.push(
        'The clean coder',
        'The pragmactic programmer',
        'Soft skills'
    );
    return res.send(response);
});

app.get('/api/v1/cars', (req, res) => {
    response.data.push(
        'Ferrari',
        'Fiat',
        'Bmw'
    );
    return res.send(response);
});

module.exports = app;