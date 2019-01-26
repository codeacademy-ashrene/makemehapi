const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/ping',
  method: 'GET',
  handler: (request, h) => 'pong',
});

const init = async () => {
  await server.start();
  console.log('Server running at', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit();
});

// init();
module.exports = server;
