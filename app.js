const express = require('express')
const app = express()
const routes = require('./routes/routes')
const morgan = require('morgan')
const { db } = require('./models')



app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.get('/', routes)

app.listen(1339, () => {
  console.log('app listening')
})
