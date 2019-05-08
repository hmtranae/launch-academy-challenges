const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbsMiddleware = require('express-handlebars');
const fs = require('fs');

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
app.use(bodyParser.json());

const productsPath = path.join(__dirname, '../products.json');

const getProducts = () => JSON.parse(fs.readFileSync(productsPath).toString());

app.get('/', (req, res) => {
  products = getProducts();
  res.render('welcome', { products });
});

app.get('/new', (req, res) => {
  const product = {
    name: '',
    description: req.body.description,
    price: '',
  };
  res.render('new', { product: product });
});

app.post('/new', (req, res) => {
  if (req.body.featured === undefined) {
    req.body.featured = false;
  }

  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    featured: req.body.featured,
  };

  if (product.name.trim() !== '' && product.price) {
    const products = getProducts();

    products.push(product);

    fs.writeFileSync(productsPath, JSON.stringify(products));

    res.redirect('/');
  } else {
    res.render('new', {
      product: product,
      error: 'Could not save product',
    });
  }
});

app.get('/show/:productName', (req, res) => {
  const { productName } = req.params;
  const products = getProducts();
  const specificProduct = products.find(product => product.name === productName);

  if (specificProduct) {
    res.render('show', { product: specificProduct });
  } else {
    res.status(404).send('Product not found');
  }
});

app.delete('/show/:productName', (req, res) => {
  const { productName } = req.params;
  const products = getProducts();
  const filteredProducts = products.filter(product => product.name !== productName);

  fs.writeFileSync(productsPath, JSON.stringify(filteredProducts));
  res.json({});
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

module.exports = app;
