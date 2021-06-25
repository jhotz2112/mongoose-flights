const Ticket = require('../models/ticket');

module.exports = {
    create,
    new: newTickets
};

function newTickets(req, res) {
    res.render('tickets/new', { flightId: req.params.id});
};

function create(req, res) {
    // delete any properties with empty strings so that default values will
    req.body.flight = req.params.id;
    const ticket = new Ticket(req.body);
        ticket.save(function (err) {
        if (err) console.log(err);
        // Created data, so redirect
        res.redirect(`/flights/${req.params.id}`);
    });
}