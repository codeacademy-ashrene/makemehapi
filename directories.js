const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

const inertInit = async () => {
  await server.register(Inert);
  // console.log("inert registered 1");
};
inertInit();
server.route({
  path: '/foo/bar/baz/{param}',
  method: 'GET', // what is POST is given
  handler: {
    directory: {
      path: 'public' // test for public - different folder
    }
  }
});
if (!module.parent) {
  const init = async () => {
    await server.register(Inert);
    // console.log("inert registered 2");
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
