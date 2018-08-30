'use strict';

var express = require("express");
var router = express.Router();
var config = require("./config");
var UserInfo = require("./models").UserInfo;
var bodyParser = require("body-parser").json;
var request = require("request");

router.use(bodyParser());

router.get("/listZipCodeData", function(req, res, next){
    ZipCodeData.find({})
            .sort({ZipCode: 1})
            .exec(function(err, info){
                if(err) return next(err);
                res.json(info);
            });
});

router.post("/newZipCodeData", function(req, res, next){
    var inData = new ZipCodeData(req.body);
    inData.save(function(err, user){
        if(err) return next(err);
        res.status(201);
        res.json(inData);
    });
});

module.exports = router;