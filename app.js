const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
// map global promise - gets rid of warning
mongoose.Promise = global.Promise
// to connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))
// useMongoClient option is no longer necessary in mongoose 5.x

// load Idea model
require('./models/Idea') // requiring the schema model
const Idea = mongoose.model('ideas')

// handlebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
})) // copied this code from the handlebars installation website
app.set('view engine', 'handlebars')// just saying we want to use the handlebars template engine.

// adding the body parser middleware for post request.
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// index route
app.get('/', (req, res) => {
  const title = 'Welcome HA!'
  res.render('index', {
    title: title
  })
}) // basically the home url// also using es6 arrow function

// about route
app.get('/about', (req, res) => { // using es6 syntax (function)
  res.render('about') // so you type localhost:5000/about and it will go to this page
  // and it will render on the browser About. Or what ever you put in the parens
})

// adding Idea Form
app.get('/ideas/add', (req, res) => {
  res.render('ideas/add')
})

// to process the .. the post request when someone wants to add something
app.post('/ideas', (req, res) => { // will need the body-parser for this
  console.log(req.body)
  res.send('ok')
})

const port = 5000

app.listen(port, () => {
  console.log(`Server on port ${port}`) // using back ticks here.. is called a template string and allows you to use variables to concatenate. this is the es6 version
})
