const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbsMiddleware = require('express-handlebars');
const fs = require('fs');

const app = express();

const suppliesPath = path.join(__dirname, '../supplies.txt');

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.engine(
  'hbs',
  hbsMiddleware({
    defaultLayout: 'default',
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const supplies = fs
    .readFileSync(suppliesPath)
    .toString()
    .split('\n');
  // remove the blank new line at the end of the file
  supplies.pop();
  res.render('index', { supplies });
});

app.post('/supplies', (req, res) => {
  const supply = req.body.itemName.trim();
  if (supply) {
    fs.writeFileSync(suppliesPath, `${supply}\n`, { flag: 'a' });
    res.redirect('/');
  } else {
    res.status(404).send('Bye.');
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

module.exports = app;
