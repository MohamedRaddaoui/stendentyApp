const express = require('express')
const router = express.Router()

const Event = require('../models/event.model')
const { generateCrudMethods } = require('../services/index.js')
const eventCrud = generateCrudMethods(Event)
const { validateDbId, raiseRecord404Error } = require('../middlewares/index.js')

router.get('/', (req, res, next) => {
    eventCrud.getAll()
        .then( data => res.send(data))
        .catch(err => next(err))
})


router.get('/:id', validateDbId, (req, res, next) => {
    eventCrud.getById(req.params.id)
        .then( data => {
            if(data)
                res.send(data)
            else
                raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})


router.post('/', (req, res, next) => {
    //req.body converted to JSON Format with bodyparser
    eventCrud.create(req.body)
        .then( data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/:id', validateDbId, (req, res) => {
    eventCrud.update(req.params.id, req.body)
    .then( data => {
        if(data)
            res.send(data)
        else
            raiseRecord404Error(req, res)
    })
    .catch(err => next(err))
 })


router.delete('/:id', validateDbId, (req, res) => {
    eventCrud.delete(req.params.id)
    .then( data => {
        if(data)
            res.send(data)
        else
            raiseRecord404Error(req, res)
    })
    .catch(err => next(err))
 })

module.exports = router