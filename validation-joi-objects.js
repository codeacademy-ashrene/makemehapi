const Hapi = require('hapi');
const Joi = require('joi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/login',
  method: 'POST',
  handler: (request, h) => ('login successful'),
  config: {
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
      }).options({ allowUnknown: true }).without('password', 'accessToken')
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
