const server = require('./uploads');

const validOptions = [{
  url: '/upload',
  method: 'POST',
  payload: {
    description: 'Makemehapi',
    file: {
      data: 'We like make me hapi',
      filename: '/uploads.txt',
      headers: {
        'content-disposition': "form-data;name='file'",
        filename: 'uploads.txt',
        'content-type': 'text/plain',
      }
    }
  }
}];
describe('server should login successfully', () => {
  validOptions.forEach((options) => {
    it('', async () => {
      const serverObject = await server.inject(options);
      expect(serverObject.payload).toEqual('login successful');
    });
  });

  // invalidOptions.forEach((options) => {
  //   it('should give bad request error - 400', async () => {
  //     const serverObject = await server.inject(options);
  //     expect(serverObject.statusCode).toEqual(400);
  //   });
  // });
});

// make a test folder
// test if file is not there
// upload file
// test if file is there