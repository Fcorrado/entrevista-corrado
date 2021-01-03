'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CreditCardSchema = new Schema({
    userId: String,
    cardToken: String,
    brandType: String,
    maskedNumber: String,
    primary: Boolean 
})

module.exports = mongoose.model('CreditCard', CreditCardSchema);