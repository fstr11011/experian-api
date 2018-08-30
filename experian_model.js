'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ZipCodeDataSchema = new Schema({
    zipCode: Number,
    startDate: Date,
    endDate: Date,
    leads: Number,
    singleFamilyLeads: Number,
    multiFamilyLeads: Number,
    maritalStatus: {
        married: Number,
        single: Number,
        unknown: Number
    },
    gender: {
        male: Number,
        female: Number,
        unknown: Number 
    },
    ageRange: {
        twenties: Number,
        thirties: Number,
        fourties: Number,
        fifties: Number,
        sixtiesPlus: Number
    },
    income: {
        tier1: Number,
        tier2: Number,
        tier3: Number,
        tier4: Number,
        tier5: Number,
        tier6: Number,
        tier7: Number,
        tier8: Number,
        tier9: Number,
        tier10: Number,
        tier11: Number,
        tier12: Number,
        unknown: Number
    }
});

var ZipCodeData = mongoose.model("ZipCodeData", ZipCodeDataSchema);

module.exports.ZipCodeData = ZipCodeData;