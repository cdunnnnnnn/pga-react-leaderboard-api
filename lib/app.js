const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require('mongoose')

const secret = require('../secrets')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

// Connect to MongoDB
mongoose.connect(
  secret.mongoConnectionString,
  { useNewUrlParser: true }
)

app.use('/api', routes)

module.exports = app
