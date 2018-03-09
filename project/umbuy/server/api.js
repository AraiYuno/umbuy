var express = require('express');
var router = express.Router();
var database = require('./database.service');

/* Advertisement table */
    router.delete('/ads/:id(\\d+)', function(req, res) {
        let advertisementId = req.params.id;
        database.deleteAdById(advertisementId,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
        });
    });

    router.get('/ads', function(req, res) {
        database.getAllAds((err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
         });
    });

    router.get('/ads/:id(\\d+)', function(req, res) {
        let advertisementId = req.params.id;
        database.getAdById(advertisementId,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
         });
    });

    router.get('/ads/user/:userId', function(req, res) {
        let userId = req.params.userId;
        database.getAdsByUserId(userId,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
         });
    });

    router.get('/ads/:title', function(req, res) {
        let title = req.params.title;
        database.getAdsByTitle(title,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
         });
    });

    router.post('/createAd', function(req, res) {
        let body = req.body;
        database.createAd(body,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
        });
    });

    router.post('/editAd', function(req, res) {
        let body = req.body;
        database.editAd(body,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(response);
        });
    });

/* Auth0 table */
    router.get('/users/:userId', function(req, res) {
        let userId = req.params.userId;
        database.getUserById(userId,(err, response, fields) =>{
            if(err) res.status(400).send(err);
            else res.send(fields);
        });
    });
    
module.exports = router;