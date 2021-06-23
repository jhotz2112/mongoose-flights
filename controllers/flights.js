const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    edit
};

function edit(req, res) {
    const flight = Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/edit', { title: 'Flight Details', flight});
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { title: 'Flight Details', flight});
    });
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function create(req, res) {
    // delete any properties with empty strings so that default values will work
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        // Created data, so redirect
        res.redirect('/flights/new');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}