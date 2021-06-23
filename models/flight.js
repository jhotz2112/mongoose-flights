const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: Date
}, {
  timestamps: true
});

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['Southwest', 'United', 'American']
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
  departs: {
    type: Date,
    default: function () {
      const aYearFromNow = new Date();
      aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
      return aYearFromNow;
    }
  },
  destinations: {
    type: [destinationSchema],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);