// // models/LoanForm.js
// const mongoose = require('mongoose');

// const loanFormSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   occupation: String,
//   income: String,
//   bankName: String,
//   branchName: String,
//   pancardFile: String,     // Placeholder, can be used later
//   otherDocsFiles: [String], // Placeholder
//   submittedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('LoanForm', loanFormSchema);


const mongoose = require('mongoose');

const loanFormSchema = new mongoose.Schema({
  name: String,
  age: Number,
  occupation: String,
  income: String,
  bankName: String,
  branchName: String,
  pancardFile: String,
  otherDocsFiles: [String],
  
  // Loan approval fields
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  approvalDate: Date,
  approverComments: String,
});

module.exports = mongoose.model('LoanForm', loanFormSchema);
