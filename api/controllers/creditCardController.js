'use strict'

var mongoose = require('mongoose'),
CreditCard = mongoose.model('CreditCard');

async function userHasCards(userId) {
    var boolean;
   await CreditCard.find({userId: userId}, function(err, creditCard) {
        if (err || (creditCard.length === 0)) {
            boolean = false;
        } else {
            boolean = true; 
        }
    });
    return boolean;
}

exports.list_all_user_credit_cards = function(req, res) {
    CreditCard.find({userId: req.query.userId}, function(err, creditCard) {
        if (err)
            res.send(err);
        res.json(creditCard);
    });
};

 exports.create_a_credit_card = async function(req, res) {
    var new_credit_card = new CreditCard(req.body);
    
    userHasCards(req.body.userId)
    .then((response) => {
        if (response) {
            new_credit_card.primary = false;
        } else {
            new_credit_card.primary = true;
        }
        
        new_credit_card.save(function(err, creditCard) {
                if (err)
                    res.send(err);
                res.json(creditCard);
            });
    });
};
