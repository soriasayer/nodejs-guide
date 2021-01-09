const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoute.routes)
app.use(shopRoute)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
