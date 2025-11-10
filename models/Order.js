// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  address: String,
  paymentType: String,
  totalAmount: Number,
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
