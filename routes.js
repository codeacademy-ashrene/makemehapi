const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 3012,
});

server.route({
  path: '/{name}',
  method: 'GET', // use encodeURI
  handler: (request, h) => `Hello ${encodeURIComponent(request.params.name)}`,
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
