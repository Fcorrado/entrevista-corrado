'use strict'

module.exports = function(app) {
    var creditCard = require('../controllers/creditCardController');

    app.route('/creditcard')
        .post(creditCard.create_a_credit_card);

    app.route('/creditcard')
        .get(creditCard.list_all_user_credit_cards);
}