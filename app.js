const express = require('express')
const bodyParser = require('body-parser')
cosnt expressHbs = require('express-handlebars')
const path = require('path')

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express()

app.engine()
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoute.routes)
app.use(shopRoute)

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'})
  // .sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
