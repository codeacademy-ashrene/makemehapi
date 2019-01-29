const fs = require('fs');
const server = require('./directories');

const invalidRoutes = [
  {
    url: '/foo/bar/file.html',
    method: 'GET',
  },
  {
    url: '/ foo / bar / file.html',
    method: 'GET',
  }];
const validRoute = {
  url: '/foo/bar/baz/file.html',
  method: 'GET',
};
describe('server', () => {
  const localFile = fs.readFileSync('public/file.html').toString();
  it('should send correct file contents', async () => {
    const response = await server.inject(validRoute);
    // console.log(localFile);
    expect(response.result).toEqual(localFile);
  });
  // test to check if correct file is called from local directory

  invalidRoutes.forEach((option) => {
    it('should give 404 - Not found status when url is incorrect', async () => {
      const response = await server.inject(option);
      expect(response.statusCode).toEqual(404);
    });
  });
});

// create two same files in diff folders to check if file is coming from public
