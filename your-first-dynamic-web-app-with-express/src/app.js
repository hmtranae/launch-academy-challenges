const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// your code here
const generateWelcomeMessage = () => {
  let message = '<h1>Welcome One and All to My First Express Website!</h1>';
  message += '<p>Web Applications Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Performance Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love. Frameworks Many popular frameworks are based on Express.</p>';

  return message;
};

app.get('/', (req, res) => {
  res.send(generateWelcomeMessage());
});

app.get('/greeting/:name', (req, res) => {
  const { lang } = req.query;
  const { name } = req.params;
  if (lang === 'es') {
    res.send(`<h1>Hola, ${name}</h1>`);
  } else if (lang === 'fr') {
    res.send(`<h1>Bonjour, ${name}</h1>`);
  } else if (lang === 'en') {
    res.send(`<h1>Hi, ${name}</h1 > `);
  } else {
    res.status(404).sendFile(path.join(__dirname, '../error.html'));
  }
});

app.get('/until-next-time/:name', (req, res) => {
  const { name } = req.params;
  const { lang } = req.query;
  if (lang === 'en') {
    res.send(`<h1>Good Bye, ${name}</h1>`);
  } else if (lang === 'es') {
    res.send(`<h1>Adios, ${name}</h1>`);
  } else if (lang === 'fr') {
    res.send(`<h1>Au revoir, ${name}</h1>`);
  } else {
    res.status(404).sendFile(path.join(__dirname, '../error.html'));
  }
});

const colors = {
  Sam: 'Red',
  John: 'Green',
  Sally: 'Blue',
  Nick: 'Gray',
};

app.get('/favorite-colors/:name', (req, res) => {
  const { name } = req.params;
  if (colors[name]) {
    res.send(` <h1 style='color:${colors[name]}'>${name}: ${colors[name]}</h1> `);
  } else {
    res.status(404).sendFile(path.join(__dirname, '../error.html'));
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

module.exports = app;
