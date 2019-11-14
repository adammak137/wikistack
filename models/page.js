const { Page } = require("../models");
const { addPage } = require("../views");

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: res.json(req.body.title),
    content: res.json(req.body.content)
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});
