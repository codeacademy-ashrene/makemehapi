const server = require('./handling');

const htmlString = `<html>
        <head><title>Hello Handling</title></head>
        <body>
            Hello Handling
        </body>
</html>`;

describe('server', () => {
  const options = {
    url: '/',
    method: 'GET',
  };
  it('should give html file', async () => {
    const response = await server.inject(options);
    // console.log(response.result);
    expect(response.result).toEqual(htmlString);
  });
  it('should give status code on successfully executing', async () => {
    const response = await server.inject(options);
    // console.log(response);
    expect(response.statusCode).toEqual(200);
  });
  xit('should give file path', async () => {
    const response = await server.inject(options);
    console.log(response.query);
    expect(response.statusCode).toEqual(200);
  });
});
// check status code 200
// check file name
