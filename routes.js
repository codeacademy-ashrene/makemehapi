const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: Number(process.argv[2]) || 8080,
});

server.route({
  path: '/{name}',
  method: 'GET', // use encodeURI
  handler: (request, h) => `Hello ${encodeURIComponent(request.params.name)}`,
});

if (!module.parent) {
  const init = async () => {
    await server.start();
    console.log('Server running at', server.info.uri);
  };
  init();
}


process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit();
});

module.exports = server;
