const wiki = require('express').Router()
const { Page } = require("../models/index");
const { addPage, wikiPage, main } = require('../views')

wiki.get('/', async (req, res, next) => {
  try {
    const allPages = await Page.findAll({ limit: 10 });
    res.send(main(allPages));
  } catch(error) {
    next(error);
  }
});

wiki.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });
  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});

wiki.get('/add', (req, res) => {
  res.send(addPage());
});

wiki.get('/:slug', async (req, res, next) => {
  try {
    const foundPage = await Page.findOne({
      where: { slug: req.params.slug }
    });
    res.send(wikiPage(foundPage));
  } catch(error) {
    next(error);
  }

});

module.exports = wiki;
