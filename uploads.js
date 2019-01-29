const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/upload',
  method: 'POST',
  config: {
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data',
    },
  },
  handler: (request, h) => {
    let body = '';
    request.payload.file.on('data', (chunk) => {
      body += chunk;
      return body;
    });
    request.payload.file.on('end', () => {
      let result = {
        description: request.payload.description,
        file: {
          data: body,
          filename: request.payload.file.hapi.filename,
          headers: request.payload.file.hapi.headers,
        },
      };
      result = JSON.stringify(result);
      h(result);
    });
  },
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
