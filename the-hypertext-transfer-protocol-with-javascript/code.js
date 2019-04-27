const request = require('request');
const fs = require('fs');

request(
  'https://s3.amazonaws.com/horizon-production/images/http-request-response-cycle.png',
  { encoding: null },
  (error, response, body) => {
    console.log(response.statusCode);
    console.log(response.headers['content-type']);
    fs.writeFileSync('image.png', body);
  },
);

// const Url = require('url');

// const url = Url.parse('https://reddit.com/r/gifs');
// console.log(url.protocol);
// console.log(url.hostname);
// console.log(url.path);
