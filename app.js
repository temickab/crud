const express = require('express')
const app = express()

// index route
app.get()

const port = 5000

app.listen(port, () => {
  console.log(`Server on port ${port}`) // using back ticks here.. is called a template string and allows you to use variables to concatenate. this is the es6 version
})
