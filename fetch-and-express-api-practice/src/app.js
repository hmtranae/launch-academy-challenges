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

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

// def parsed_books_json_data
//   data = File.read(CURRENT_FILE_PATH + "/books.json")
//   JSON.parse(data)
// end

const booksPath = path.join(__dirname, '../books.json');

const booksJson = () => JSON.parse(fs.readFileSync(booksPath));

const getNextBookId = () => {
  const books = booksJson();
  const maxBook = _.maxBy(books.books, book => book.id);
  return maxBook.id + 1;
};

const updateBooksJsonData = (books) => {
  const data = { books: books };
  fs.writeFileSync(booksPath, JSON.stringify(data));
};

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/test', (req, res) => {
  res.send('Hello world');
});

app.get('/test-error', (req, res) => {
  res.status(500).send('');
});

app.get('/books.json', (req, res) => {
  res.set({ 'Content-Type': 'application/json' }).json(booksJson());
});

app.post('/books.json', (req, res) => {
  const { book } = req.body;
  if (book && book.name) {
    const newBook = {
      id: getNextBookId(),
      name: book.name,
    };
    const { books } = booksJson();
    books.push(newBook);
    updateBooksJsonData(books);
    res.send(201).json({ book: newbook });
  } else {
    res.send(422).json({ name: ["Can't be blank"] });
  }
});

module.exports = app;
