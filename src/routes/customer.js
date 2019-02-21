let CumstomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

// create a new Customer
router.post('/customer', (req, res) => {

    if(!req.body){
        return res.status(400).send('Request body is missing')
    }

    if(!req.body.email){
        return res.status(400).send('Request body has email is missing')
    }

    // let user = {
    //     name: 'firstname lastname',
    //     email: 'email@gmail.com'
    // }

    let model = new CumstomerModel(req.body) 
    model.save()
    .then( doc => {
        if(!doc || doc.length === 0) {
            return res.status(500).send(doc)
        }

        res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
    
})

// GET
router.get('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send('Request parameter has email is missing')
    }

    CumstomerModel.findOne({
        email: req.query.email
    })
    .then( doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
})

// GETS
router.get('/customers', (req, res) => {
    CumstomerModel.find({
    })
    .then( doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
})

// Update
router.put('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send('Request parameter has email is missing')
    }

    CumstomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then( doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
})

// Delete
router.delete('/customer', (req, res) => {
    if(!req.query.email){
        return res.status(400).send('Request parameter has email is missing')
    }

    CumstomerModel.findOneAndDelete({
        email: req.query.email
    })
    .then( doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    }) 
})

module.exports = router