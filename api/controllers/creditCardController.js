'use strict'

var mongoose = require('mongoose'),
CreditCard = mongoose.model('CreditCard');

async function userHasCards(userId) {
    var found = await CreditCard.find({userId: userId});
    return found.length > 0;
}

exports.list_all_user_credit_cards = function(req, res) {
    CreditCard.find({userId: req.query.userId}, function(err, creditCard) {
        if (err)
            res.send(err);
        res.json(creditCard);
    });
};

 exports.create_a_credit_card = function(req, res) {
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
