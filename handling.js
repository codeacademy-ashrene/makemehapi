const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

const fileInit = async () => {
  await server.register(Inert);
};

fileInit();

server.route({
  path: '/',
  method: 'GET',
  handler: (request, h) => h.file('index.html'),
});


if (!module.parent) {
  const init = async () => {
    await server.register(Inert);
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
