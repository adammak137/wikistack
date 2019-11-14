const router = require('express').Router()
const layout = require('../views/layout')

router.get('/', (req, res) => {
  res.send(layout())
})

module.exports = router
