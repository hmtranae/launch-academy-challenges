const request = require('request');
const util = require('util');

const weatherUrl = 'https://api.weather.gov/points/42.35,-71.06';

request.get(
  weatherUrl,
  {
    headers: {
      'User-Agent': 'request',
    },
  },
  (err, response, body) => {
    console.log(util.inspect(JSON.parse(body)));
  },
);
