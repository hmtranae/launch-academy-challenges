const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hbsMiddleware = require('express-handlebars');
const fs = require('fs');

const app = express();

const tasksPath = path.join(__dirname, 'tasks.txt');

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
  const tasks = fs.readFileSync(tasksPath, 'utf8').split('\n');
  // remove the blank new line at the end of the file
  tasks.pop();
  res.render('index', { tasks });
});

app.post('/tasks', (req, res) => {
  const taskContents = req.body.taskName;
  fs.writeFileSync(tasksPath, `${taskContents}\n`, { flag: 'a' });
  res.redirect('/');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});


module.exports = app;
