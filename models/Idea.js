const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating the Schema
const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true

  },
  details: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // means it will populate the current date as it is in the present
  }

})

mongoose.model('ideas', IdeaSchema) // the model
// The above code is creating the model
// I am naming the model ideas and
// it will be connected to the IdeaSchema
