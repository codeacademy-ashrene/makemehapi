const server = require('./routes.js');

describe('server', () => {
  const options1 = {
    url: '/ashrene',
    method: 'GET',
  };

  it('should return Hello name', async () => {
    const response = await server.inject(options1);
    // console.log(response);
    expect(response.result).toEqual('Hello ashrene');
  });

  const options2 = {
    url: '/',
    method: 'GET',
  };
  it('should return error Not found', async () => {
    const response = await server.inject(options2);
    // console.log(response);
    expect(response.result).toEqual({ error: 'Not Found', message: 'Not Found', statusCode: 404 });
  });

  const options3 = {
    url: '/12 3',
    method: 'GET',
  };
  it('should return safe string without spaces in between', async () => {
    const response = await server.inject(options3);
    // console.log(response);
    expect(response.result).toEqual('Hello 12%203');
  });

  const options4 = {
    url: '/ashrene&roy',
    method: 'GET',
  };
  it('should return safe string without & in between', async () => {
    const response = await server.inject(options4);
    // console.log(response);
    expect(response.result).toEqual('Hello ashrene%26roy');
  });
});
