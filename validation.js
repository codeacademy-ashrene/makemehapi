const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: (request, h) => `${request.params.breed}`,
  config: {
    validate: {
      params: {
        breed: Joi.string().required(), // test for string, check joi.validation - postman
      }
    }
  }
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
