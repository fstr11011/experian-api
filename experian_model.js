'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ZipCodeDataSchema = new Schema({
    zipCode: Int,
    leads: Int,
    singleFamilyLeads: Int,
    multiFamilyLeads: Int,
    maritalStatus: {
        married: Int,
        single: Int,
        unknown: Int
    },
    gender: {
        male: Int,
        female: Int,
        unknown: Int 
    },
    ageRange: {
        twenties: Int,
        thirties: Int,
        fourties: Int,
        fifties: Int,
        sixtiesPlus: Int
    },
    income: {
        tier1: Int,
        tier2: Int,
        tier3: Int,
        tier4: Int,
        tier5: Int,
        tier6: Int,
        tier7: Int,
        tier8: Int,
        tier9: Int,
        tier10: Int,
        tier11: Int,
        tier12: Int,
        unknown: Int
    }
});

var ZipCodeData = mongoose.model("ZipCodeData", ZipCodeDataSchema);

module.exports.ZipCodeData = ZipCodeData;