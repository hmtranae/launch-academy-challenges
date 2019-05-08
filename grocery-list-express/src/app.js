const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbsMiddleware = require('express-handlebars');
const fs = require('fs');
const _ = require('lodash');

const app = express();

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

const groceriesPath = path.join(__dirname, '../groceries.json');

const getGroceries = () => JSON.parse(fs.readFileSync(groceriesPath).toString());
const groceries = getGroceries();

const formatQuantity = quantity => ((quantity === '') ? 1 : parseInt(quantity));

const addToGroceriesList = grocery => fs.writeFileSync(groceriesPath, JSON.stringify(grocery));

const showSpecificGrocery = (grocery, res) => {
  if (grocery) {
    res.render('groceries/show', { grocery });
  } else {
    res.send('Could not find product');
  }
};

const redirectAfterFormSubmit = (grocery, res) => {
  if (grocery.name.trim() !== '') {
    groceries.push(grocery);
    addToGroceriesList(groceries);
    res.redirect('/groceries');
  } else {
    res.render('groceries', { groceries: groceries, error: 'Could not save grocery. Please enter a valid name' });
  }
};

app.get('/', (req, res) => {
  res.redirect('/groceries');
});

app.get('/groceries', (req, res) => {
  res.render('groceries/index', { groceries });
});

app.get('/groceries/:groceryName', (req, res) => {
  const { groceryName } = req.params;
  const grocery = groceries.find(item => item.name === groceryName);

  showSpecificGrocery(grocery, res);
});

app.post('/groceries', (req, res) => {
  const grocery = { name: req.body.name, quantity: req.body.quantity };
  grocery.quantity = formatQuantity(grocery.quantity);

  redirectAfterFormSubmit(grocery, res);
});

app.delete('/groceries/:groceryName', (req, res) => {
  const { groceryName } = req.params;
  const filteredGroceries = groceries.filter(grocery => grocery.name !== groceryName);

  addToGroceriesList(filteredGroceries);
  res.json({});
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

module.exports = app;
