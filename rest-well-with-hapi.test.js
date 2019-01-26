const server = require('./rest-well-with-hapi');

const htmlString = `<html>
<head><title>Hello Handling</title></head>
<body>
    Hello Handling
</body>
</html>`;

describe('server', () => {
  it('should give html file', async () => {
    const options = {
      url: '/',
      method: 'GET',
    };
    const response = await server.inject(options);
    // console.log(response.result);
    expect(response.result).toEqual(htmlString);
  });
  it('should give status code on successfully executing', async () => {
    const options = {
      url: '/',
      method: 'GET',
    };
    const response = await server.inject(options);
    // console.log(response);
    expect(response.statusCode).toEqual(200);
  });
  it('should give file path', async () => {
    const options = {
      url: '/',
      method: 'GET',
    };
    const response = await server.inject(options);
    console.log(response);
    expect(response.statusCode).toEqual(200);
  });
});
// check status code 200
// check file name
