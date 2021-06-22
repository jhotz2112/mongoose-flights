const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: Number,
    default: function() {
      return new Date().getFullYear() + 1;
    },
    timestamps: true
    
  });

module.exports = mongoose.model('Flight', flightSchema);