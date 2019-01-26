const server = require('./hello-hapi');

describe('', () => {
  const options = {
    url: '/',
    method: 'GET',
  };

  // process.argv = ['node', 'hello-hapi.js', '3000'];
  it('should return Hello hapi', async () => {
    const response = await server.inject(options);
    expect(response.result).toEqual('Hellohvgj hapi');
  });
});
