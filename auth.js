const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

const users = {
  hapi: {
    username: 'hapi',
    password: 'auth',
  }
};

const authInit = async () => {
  await server.register(require('hapi-auth-basic')); 
};
authInit();

const validate = async (request, username, password, h) => {
  const user = users[username];
  if (!user) {
    return {
      credentials: null, isValid: false,
    };
  }
  const isValid = () => {
    if (password === user.password) {
      return true;
    }
    return false;
  }
  const credentials = {name: user.name};
  return {isValid, credentials};
}

server.auth.strategy('simple', 'basic', { validate });
server.auth.default('simple');

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'welcome';
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
