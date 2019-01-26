const server = require('../server');

const route = require('../routes/ping');

describe('server', () => {
  // process.argv = ['node', 'hello-hapi.js', '3000'];
  it('should return pong on visiting /ping', async () => {
    const response = await server.inject(route.route1);
    expect(response.result).toEqual('pong');
  });
  it('should return "error": "Not Found" 404 on visiting /pi ng', async () => {
    const response = await server.inject(route.invalidRoute);
    expect(response.statusCode).toEqual(404);
  });
});
