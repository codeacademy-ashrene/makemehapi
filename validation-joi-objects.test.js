const Joi = require('joi');
const server = require('./validation-joi-objects');

const validOptions = [{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: false,
    username: 'ashrene',
    password: 'password'
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: true,
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: true,
    password: 'adsaas',
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: false,
    username: 'ashrene roy',
    password: 'dfsff',
  }
}
];
// ///////////////
const invalidOptions = [{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: false,
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {} // cookies
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: false,
    username: 'ashrene roy',
    password: 'dfsff',
    accessToken: '67567jhgvhj'
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: true,
    username: 'ashrene roy',
    password: 'dfsff',
    accessToken: 'tgfgtg767'
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: false,
    username: 'ashrene roy',
    password: 'dfsff%$',
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: 0,
    username: 'ashrene roy',
    password: 'dfsff',
  }
},
{
  url: '/login',
  method: 'POST',
  payload: {
    isGuest: false,
    username: 'ashrene roy',
    password: 1234,
  }
}
];

describe('server should login successfully', () => {
  validOptions.forEach((options) => {
    it('', async () => {
      const serverObject = await server.inject(options);
      expect(serverObject.payload).toEqual('login successful');
    });
  });

  invalidOptions.forEach((options) => {
    it('should give bad request error - 400', async () => {
      const serverObject = await server.inject(options);
      expect(serverObject.statusCode).toEqual(400);
    });
  });
});

// testing joi is the actual purpose
// export joi object to a different file and test it
