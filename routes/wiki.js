const wiki = require('express').Router()

wiki.get('/', (req, res) => {
  res.send('root GET');
});
wiki.post('/', (req, res) => {
  res.send('root POST');
});
wiki.get('/add', (req, res) => {
  res.send('add GET');
});

module.exports = wiki;
