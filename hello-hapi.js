const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, h) => 'Hello hapi',
});

const init = async () => {
  await server.start();
  console.log('Server running at', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit();
});

//! module.exports

// init();
module.exports = server;
