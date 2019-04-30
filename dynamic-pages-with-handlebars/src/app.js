const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

const hbsMiddleware = require('express-handlebars');

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

const vipNerds = [
  'Grace Hopper',
  'Mark Zuckerberg',
  'Bill Gates',
  'Margaret Hamilton',
];

app.get('/guests', (req, res) => {
  const nerdsFound = vipNerds.filter((name) => {
    if (req.query.search) {
      return name.startsWith(req.query.search);
    }
    return true;
  });
  res.render('search', { nerdsFound: nerdsFound || [] });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

module.exports = app;
