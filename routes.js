'use strict';

var express = require("express");
var router = express.Router();
var config = require("./config");
var ZipCodeData = require("./experian_model").ZipCodeData;
var bodyParser = require("body-parser").json;
var request = require("request");

router.use(bodyParser());

//check connection
router.get("/", function(req, res, next){
    res.json({
        "message": "You are connected!"
    });
});

//list all documents in dB
router.get("/listZipCodeData", function(req, res, next){
    ZipCodeData.find({})
            .sort({zipCode: 1})
            .exec(function(err, info){
                if(err) return next(err);
                res.json(info);
            });
});

//search data for zipcode
router.get("/search/:zipcode", function(req, res, next){
    ZipCodeData.findOne({zipCode: req.params.zipcode})
        .exec(function(err, data){
            if(err) return next(err);
            res.json(data);
        });
});

//return data of zipcodes with leads over specified value
router.get("/over/:leads", function(req, res, next){
    ZipCodeData.where('leads').gt(req.params.leads).exec(function(err, data){
        if(err) return next(err);
        res.json(data);
    });
});

//top 3 documents
router.get("/top3", function(req, res, next){
    ZipCodeData.find().sort({leads: -1}).limit(3).exec(function(err, data){
        if(err) return next(err);
        res.json(data);
    });
});

//top 5 documents
router.get("/top5", function(req, res, next){
    ZipCodeData.find().sort({leads: -1}).limit(5).exec(function(err, data){
        if(err) return next(err);
        res.json(data);
    });
});

//top 10 documents
router.get("/top10", function(req, res, next){
    ZipCodeData.find().sort({leads: -1}).limit(10).exec(function(err, data){
        if(err) return next(err);
        res.json(data);
    });
});

//post new data for a zipcode
router.post("/newZipCodeData", function(req, res, next){
    var inData = new ZipCodeData(req.body);
    inData.save(function(err, inData){
        if(err) return next(err);
        res.status(201);
        res.json(inData);
    });
});

module.exports = router;