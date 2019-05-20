const express = require('express')
const router = express.Router()
const players = require('../controllers/players.controller')

router.use('/players', players)
module.exports = router
