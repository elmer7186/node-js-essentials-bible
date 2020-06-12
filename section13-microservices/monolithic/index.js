const server = require = require('./src/app');

server.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});