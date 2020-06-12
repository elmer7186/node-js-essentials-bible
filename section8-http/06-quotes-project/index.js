/**
 * Example project with express with render html and consume services
 * 
 * Execute:
 * 
 * node section8-http/06-quotes-project/index.js
 */
const express = require('express');
const server = express();
const { PORT } = require('./config');
const { HomeRoute, QuotesRoute } = require('./routes');
const { NotFoundMiddleware } = require('./middlewares');

server.use(express.static('./public'));
server.use(express.json());

server.use('/', HomeRoute);
server.use('/', QuotesRoute);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
    console.log(`Application running on PORT ${PORT}`);
});

