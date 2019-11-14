const router = require('express').Router()
const layout = require('../views/layout')

const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

// router.get('/', (req, res) => {
//   res.send(layout())
// })

module.exports = router
