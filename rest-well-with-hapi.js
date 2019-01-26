const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
  host: 'localhost',
  port: 5009,
});

const init = async () => {
  await server.register(Inert);
  server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => h.file('index.html'),
  });

  await server.start();
  console.log('Server running at', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit();
});


// init();

module.exports = server;
