const mongoose = require('mongoose')
const PlayerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  score: Number,
  country: String,
  image: String,
})

module.exports = mongoose.model('Player', PlayerSchema)
