const express = require('express')
const app = express()

// index route
app.get('/', (req, res) => {
  res.send('HELLO')
}) // basically the home url// also using es6 arrow function

// about route
app.get('/about', (req, res) => { // using es6 syntax (function)
  res.send('About999') // so you type localhost:5000/about and it will go to this page
  // and it will render on the browser About. Or what ever you put in the parens
})

const port = 5000

app.listen(port, () => {
  console.log(`Server on port ${port}`) // using back ticks here.. is called a template string and allows you to use variables to concatenate. this is the es6 version
})
