const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

const messagePath = 'messages.txt';

const getMessages = () => fs
  .readFileSync(messagePath)
  .toString()
  .split('\n');

app.get('/', (req, res) => {
  res.redirect('/messages');
});

app.post('/messages', (req, res) => {
  if (req.body.message && req.body.message !== '') {
    fs.writeFileSync(messagePath, req.body.message, { flag: 'a' });
    res.status(201).send('Created');
  } else {
    res.status(404).send('Not Found');
  }
});

app.get('/messages', (req, res) => {
  res.contentType('text/html').send(
    getMessages()
      .map(message => `<br/>${message}`)
      .join('\n'),
  );
});

app.get('/messages/:id', (req, res) => {
  const lineNum = parseInt(req.params.id) - 1;
  if (lineNum >= 0) {
    res.send(getMessages()[lineNum]);
  } else {
    res.status(404).send('Not Found');
  }
});

app.patch('/messages/:id', (req, res) => {
  const lineNum = parseInt(req.params.id) - 1;
  if (lineNum >= 0) {
    const newMessages = getMessages();
    newMessages[lineNum] = req.body.message;
    fs.writeFileSync(messagePath, newMessages.join('\n'), { flag: 'w' });
    res.send('OK');
  } else {
    res.status(404).send('Not Found');
  }
});

app.delete('/messages/:id', (req, res) => {
  const lineNum = parseInt(req.params.id) - 1;
  if (lineNum >= 0) {
    const newMessages = getMessages().filter((message, index) => index !== lineNum);
    fs.writeFileSync(messagePath, newMessages.join('\n'), { flag: 'w' });
    res.send('OK');
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is listening...');
});

module.exports = app;
