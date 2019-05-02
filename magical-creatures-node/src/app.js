const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const fs = require('fs');
const flash = require('flash');
const hbsMiddleware = require('express-handlebars');

const app = express();

const dataPath = path.join(__dirname, '../data.csv');
const fields = ['title', 'url', 'description'];

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
app.use(
  expressSession({
    secret: 'Launch Academy',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);
app.use(flash());

// flush session
app.use((req, res, next) => {
  if (req.session && req.session.flash && req.session.flash.length > 0) {
    req.session.flash = [];
  }
  next();
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));

const creatures = require('./creatures');
const MagicalCreature = require('./MagicalCreature');
// YOUR CODE BELOW

app.get('/', async (req, res) => {
  res.render('WelcomePage');
});

const grabCreature = (creatureName) => {
  let index;
  creatures.forEach((creature, i) => {
    if (creature.name === creatureName) {
      index = i;
    }
  });
  return creatures[index];
};

app.get('/creatures', (req, res) => {
  const creaturesObj = creatures.map(creature => new MagicalCreature(creature.name, creature.ability, creature.age));
  res.render('Creatures', { creatures: creaturesObj });
});

app.get('/creatures/:creature', (req, res) => {
  const currentCreature = grabCreature(req.params.creature);
  const currentCreatureInstance = new MagicalCreature(currentCreature.name, currentCreature.ability, currentCreature.age);
  if (creatures.includes(currentCreature)) {
    res.render('SpecificCreature', { creature: currentCreatureInstance });
  } else {
    res.send('This creature does not exist');
  }
});

module.exports = app;
