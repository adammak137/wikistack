const wiki = require('express').Router()
const { Page } = require("../models/index");
const { addPage } = require('../views')

wiki.get('/', (req, res) => {
  res.send('root GET');
});



wiki.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  try {
    await page.save();
    // console.log('testing')
    res.redirect('/');
  } catch (error) { next(error) }
});

wiki.get('/add', (req, res) => {
  res.send(addPage());
});


module.exports = wiki;
