const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// handlebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
})) // copied this code from the handlebars installation website
app.set('view engine', 'handlebars')// just saying we want to use the handlebars template engine.

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

const port = 5000

app.listen(port, () => {
  console.log(`Server on port ${port}`) // using back ticks here.. is called a template string and allows you to use variables to concatenate. this is the es6 version
})
