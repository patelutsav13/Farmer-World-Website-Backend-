// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   city: String,
//   date: String,
//   crop: String,
//   qunt: Number,
//   name: String,
//   mobile: String,
//   aadhar: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Appointment', appointmentSchema);


const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  city: String,
  date: String,
  crop: String,
  qunt: Number,
  name: String,
  mobile: String,
  aadhar: String,
  status: {
    type: String,
    default: 'Pending', 
  },
  approvalDate: Date,
  approverComments: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
