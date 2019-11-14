const express = require('express')
const app = express()
const routes = require('./routes/routes')
const morgan = require('morgan')
const { db, Page, User } = require('./models')

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.get('/', routes)

const init = async () => {
  await db.sync();
  app.listen(1339, () => {
    console.log('app listening')
  })
}

init();
