const server = require('./validation');

const checkIfParameterExists = (obj) => {
  // console.log(obj.request.params.breed);
  if (obj.request.params.breed) {
    return true;
  }
  return false;
};

const validOptions = [{
  url: '/chickens/{breed}',
  method: 'GET',
},
{
  url: '/chickens/ashrene',
  method: 'GET',
},
{
  url: '/chickens/ashrene roy', // converts to ashrene%20roy
  method: 'GET',
},
{
  url: '/chickens/ashrene%20roy',
  method: 'GET',
},
{
  url: '/chickens/1234', // path will always be string, query parameter can contain numbers
  method: 'GET',
}];

const invalidOptions = [{
  url: '/',
  method: 'GET',
},
{
  url: '/chickens/',
  method: 'GET',
},
{
  url: '/bird',
  method: 'GET',
}];

describe('server', () => {
  validOptions.forEach((options) => {
    it('should check if url parameter is present', async () => {
      const serverObject = await server.inject(options);
      expect(checkIfParameterExists(serverObject)).toEqual(true);
    });
  });
  invalidOptions.forEach((options) => {
    it('should check give 404 Not Found if url is incorrect', async () => {
      const serverObject = await server.inject(options);
      expect(serverObject.statusCode).toEqual(404);
    });
  });
});
