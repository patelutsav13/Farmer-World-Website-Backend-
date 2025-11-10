

// // server2.js - Loan server with MongoDB
// const express = require('express');
// const session = require('express-session');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const LoanForm = require('./models/LoanForm');

// const app = express();
// const PORT = 5002;

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected for Loan Server'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use(express.json());

// app.use(session({
//   secret: 'secretKey123',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));

// // POST - Save Loan Form
// app.post('/api/loan/apply', async (req, res) => {
//   const formData = {
//     name: req.body.name,
//     age: req.body.age,
//     occupation: req.body.occupation,
//     income: req.body.income,
//     bankName: req.body.bankName,
//     branchName: req.body.branchName,
//     pancardFile: null,
//     otherDocsFiles: []
//   };

//   try {
//     const newForm = new LoanForm(formData);
//     const savedForm = await newForm.save();

//     req.session.loanFormId = savedForm._id;
//     console.log("📥 Form Saved:", savedForm);

//     res.json({ message: '✅ Form submitted successfully!', data: savedForm });
//   } catch (error) {
//     console.error('❌ Error saving loan form:', error);
//     res.status(500).json({ message: '❌ Failed to save form' });
//   }
// });

// // GET - Fetch Loan Form
// app.get('/api/loan/form', async (req, res) => {
//   const formId = req.session.loanFormId;
//   if (!formId) return res.status(404).json({ message: 'No form ID in session' });

//   try {
//     const form = await LoanForm.findById(formId);
//     if (!form) return res.status(404).json({ message: 'No form found' });
//     res.json(form);
//   } catch (error) {
//     console.error('❌ Fetch error:', error);
//     res.status(500).json({ message: 'Failed to fetch form data' });
//   }
// });

// // DELETE - Unsubmit Loan Form
// app.delete('/api/loan/form', async (req, res) => {
//   const formId = req.session.loanFormId;
//   if (!formId) return res.status(400).json({ message: 'No form to delete' });

//   try {
//     await LoanForm.findByIdAndDelete(formId);
//     req.session.loanFormId = null;
//     console.log(`🗑 Loan Form Deleted: ${formId}`);
//     res.json({ message: '✅ Loan form deleted' });
//   } catch (error) {
//     console.error('❌ Delete error:', error);
//     res.status(500).json({ message: '❌ Failed to delete form' });
//   }
// });

// // Default Route
// app.get('/', (req, res) => {
//   res.send('Loan Server Running with MongoDB');
// });

// app.listen(PORT, () => console.log(`🚀 Loan server running on port ${PORT}`));




// const express = require('express');
// const session = require('express-session');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const LoanForm = require('./models/LoanForm');

// const app = express();
// const PORT = 5002;

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB connected for Loan Server'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Middleware
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use(express.json());

// app.use(session({
//   secret: 'secretKey123',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));

// // POST - Save Loan Form
// app.post('/api/loan/apply', async (req, res) => {
//   const formData = {
//     name: req.body.name,
//     age: req.body.age,
//     occupation: req.body.occupation,
//     income: req.body.income,
//     bankName: req.body.bankName,
//     branchName: req.body.branchName,
//     pancardFile: null,
//     otherDocsFiles: []
//   };

//   try {
//     const newForm = new LoanForm(formData);
//     const savedForm = await newForm.save();

//     req.session.loanFormId = savedForm._id;
//     console.log("📥 Form Saved:", savedForm);

//     res.json({ message: '✅ Form submitted successfully!', data: savedForm });
//   } catch (error) {
//     console.error('❌ Error saving loan form:', error);
//     res.status(500).json({ message: '❌ Failed to save form' });
//   }
// });

// // GET - Fetch Loan Form (for user review)
// app.get('/api/loan/form', async (req, res) => {
//   const formId = req.session.loanFormId;
//   if (!formId) return res.status(404).json({ message: 'No form ID in session' });

//   try {
//     const form = await LoanForm.findById(formId);
//     if (!form) return res.status(404).json({ message: 'No form found' });
//     res.json(form);
//   } catch (error) {
//     console.error('❌ Fetch error:', error);
//     res.status(500).json({ message: 'Failed to fetch form data' });
//   }
// });

// // DELETE - Unsubmit Loan Form (clear data)
// app.delete('/api/loan/form', async (req, res) => {
//   const formId = req.session.loanFormId;
//   if (!formId) return res.status(400).json({ message: 'No form to delete' });

//   try {
//     await LoanForm.findByIdAndDelete(formId);
//     req.session.loanFormId = null;
//     console.log(`🗑 Loan Form Deleted: ${formId}`);
//     res.json({ message: '✅ Loan form deleted' });
//   } catch (error) {
//     console.error('❌ Delete error:', error);
//     res.status(500).json({ message: '❌ Failed to delete form' });
//   }
// });

// // ADMIN ROUTES - Loan approval management

// // Get all loan forms (default filter pending)
// app.get('/api/loan/forms', async (req, res) => {
//   try {
//     const statusFilter = req.query.status || 'Pending';
//     const forms = await LoanForm.find({ status: statusFilter });
//     res.json(forms);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch loan forms' });
//   }
// });

// // Approve/Reject loan form by ID
// app.put('/api/loan/forms/:id/decision', async (req, res) => {
//   const { id } = req.params;
//   const { status, approverComments } = req.body;

//   if (!['Approved', 'Rejected'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status' });
//   }

//   try {
//     const loanForm = await LoanForm.findById(id);
//     if (!loanForm) return res.status(404).json({ message: 'Loan form not found' });

//     loanForm.status = status;
//     loanForm.approvalDate = new Date();
//     loanForm.approverComments = approverComments || '';
//     await loanForm.save();

//     res.json({ message: `Loan form ${status.toLowerCase()} successfully`, loanForm });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update loan form' });
//   }
// });

// // Default Route
// app.get('/', (req, res) => {
//   res.send('Loan Server Running with MongoDB and Approval System');
// });

// app.listen(PORT, () => console.log(`🚀 Loan server running on port ${PORT}`));


const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const LoanForm = require('./models/LoanForm');

const app = express();
const PORT = 5002;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected for Loan Server'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use(session({
  secret: 'secretKey123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// POST - Save Loan Form
app.post('/api/loan/apply', async (req, res) => {
  const formData = {
    name: req.body.name,
    age: req.body.age,
    occupation: req.body.occupation,
    income: req.body.income,
    bankName: req.body.bankName,
    branchName: req.body.branchName,
    pancardFile: null,
    otherDocsFiles: []
  };

  try {
    const newForm = new LoanForm(formData);
    const savedForm = await newForm.save();

    req.session.loanFormId = savedForm._id;
    console.log("📥 Form Saved:", savedForm);

    res.json({ message: '✅ Form submitted successfully!', data: savedForm });
  } catch (error) {
    console.error('❌ Error saving loan form:', error);
    res.status(500).json({ message: '❌ Failed to save form' });
  }
});

// GET - Fetch Loan Form (for user review)
app.get('/api/loan/form', async (req, res) => {
  const formId = req.session.loanFormId;
  if (!formId) return res.status(404).json({ message: 'No form ID in session' });

  try {
    const form = await LoanForm.findById(formId);
    if (!form) return res.status(404).json({ message: 'No form found' });
    res.json(form);
  } catch (error) {
    console.error('❌ Fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch form data' });
  }
});

// DELETE - Unsubmit Loan Form (clear data)
app.delete('/api/loan/form', async (req, res) => {
  const formId = req.session.loanFormId;
  if (!formId) return res.status(400).json({ message: 'No form to delete' });

  try {
    await LoanForm.findByIdAndDelete(formId);
    req.session.loanFormId = null;
    console.log(`🗑 Loan Form Deleted: ${formId}`);
    res.json({ message: '✅ Loan form deleted' });
  } catch (error) {
    console.error('❌ Delete error:', error);
    res.status(500).json({ message: '❌ Failed to delete form' });
  }
});

// UPDATED - Get all loan forms filtered by username and status (supports multiple statuses comma separated)
app.get('/api/loan/forms', async (req, res) => {
  try {
    const { username, status } = req.query;

    let query = {};

    if (username) {
      query.name = username; // assuming 'name' is username in LoanForm
    }

    if (status) {
      const statusList = status.split(',');
      query.status = { $in: statusList };
    } else {
      query.status = 'Pending';
    }

    const forms = await LoanForm.find(query);
    res.json(forms);
  } catch (err) {
    console.error('Loan forms fetch error:', err);
    res.status(500).json({ message: 'Failed to fetch loan forms' });
  }
});

// Approve/Reject loan form by ID
app.put('/api/loan/forms/:id/decision', async (req, res) => {
  const { id } = req.params;
  const { status, approverComments } = req.body;

  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const loanForm = await LoanForm.findById(id);
    if (!loanForm) return res.status(404).json({ message: 'Loan form not found' });

    loanForm.status = status;
    loanForm.approvalDate = new Date();
    loanForm.approverComments = approverComments || '';
    await loanForm.save();

    res.json({ message: `Loan form ${status.toLowerCase()} successfully`, loanForm });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update loan form' });
  }
});

// Default Route
app.get('/', (req, res) => {
  res.send('Loan Server Running with MongoDB and Approval System');
});

app.listen(PORT, () => console.log(`🚀 Loan server running on port ${PORT}`));
