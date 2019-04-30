const request = require('request');

request.get('http://localhost:3000/messages', (error, response, body) => {
  console.log(body);
});
