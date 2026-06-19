const mongoose = require('mongoose');

const auctionSlotSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true
  },
  crop: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    default: 20
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AuctionSlot', auctionSlotSchema);
