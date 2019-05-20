const express = require('express')
const playersController = express.Router()
const Player = require('../models/player')

playersController.get('/', async (req, res) => {
  const players = await Player.find()
    .select('name')
    .sort({ _id: -1 })
  res.set('Access-Control-Allow-Origin', '*')
  res.json(players)
})

playersController.get('/:id', async (req, res) => {
  const player = await Player.findById(req.params.id)
  res.set('Access-Control-Allow-Origin', '*')
  res.json(player)
})

playersController.post('/', async (req, res) => {
  if (!req.body) {
    return res.status(403).end()
  }
  const player = await Player.create(req.body)
  res.set('Access-Control-Allow-Origin', '*')
  res.json(player)
})

playersController.put('/:id', async (req, res) => {
  if (!req.body) {
    return res.status(403).end()
  }
  const player = await Player.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      $upsert: true,
      new: true,
    }
  )
  res.set('Access-Control-Allow-Origin', '*')
  res.json(player)
})

playersController.delete('/:id', async (req, res) => {
  const player = await Player.deleteOne({
    _id: req.params.id,
  })
  res.set('Access-Control-Allow-Origin', '*')
  res.json(player)
})

module.exports = playersController
