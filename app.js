const express = require('express')
const app = express()
const morgan = require('morgan')
const { db, Page, User } = require('./models')

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

// Routes
const routes = require('./routes/routes')

app.get('/', (req, res) => {
  res.redirect('/wiki')
})
app.use('/', routes);


const init = async () => {
  await db.sync({
    force: true
  });
  app.listen(1339, () => {
    console.log('app listening')
  })
}

init();
