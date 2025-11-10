
// const AppointmentModel = require('./models/Appointment');
// const express = require('express');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');

// const app = express();
// const PORT = 5000;

// // In-memory storage (replace with DB in production)
// let appointments = [];
// let products = [];
// let orders = [];

// // Seed sample products
// products = [
//   // Section 1: Farm Devices
//   { id: 'p1', name: 'Tractor - Mahindra 475 DI', price: 520000, image: 'tractor1.jpg', category: 'devices' },
//   { id: 'p2', name: 'Tractor - Swaraj 744 FE', price: 610000, image: 'tractor2.jpg', category: 'devices' },
//   { id: 'p3', name: 'Threshing Machine', price: 35000, image: 'thresher.jpg', category: 'devices' },
//   { id: 'p4', name: 'Plough Machine', price: 25000, image: 'plough.jpg', category: 'devices' },
//   { id: 'p5', name: 'Seed Drill', price: 18000, image: 'seeder.jpg', category: 'devices' },
//   { id: 'p6', name: 'Rotavator', price: 30000, image: 'rotavator.jpg', category: 'devices' },
//   { id: 'p7', name: 'Sprayer Pump', price: 5000, image: 'sprayer.jpg', category: 'devices' },
//   { id: 'p8', name: 'Water Pump', price: 15000, image: 'pump.jpg', category: 'devices' },

//   // Section 2: Fertilizers
//   { id: 'f1', name: 'Urea 45kg', price: 300, image: 'urea.jpg', category: 'fertilizers' },
//   { id: 'f2', name: 'DAP 50kg', price: 1100, image: 'dap.jpg', category: 'fertilizers' },
//   { id: 'f3', name: 'Potash 50kg', price: 950, image: 'potash.jpg', category: 'fertilizers' },
//   { id: 'f4', name: 'Organic Compost 40kg', price: 400, image: 'compost.jpg', category: 'fertilizers' },

//   // Section 3: Farm Essentials
//   { id: 'e1', name: 'Gloves (Set of 5)', price: 250, image: 'gloves.jpg', category: 'essentials' },
//   { id: 'e2', name: 'Boots', price: 1200, image: 'boots.jpg', category: 'essentials' },
//   { id: 'e3', name: 'Raincoat', price: 900, image: 'raincoat.jpg', category: 'essentials' },
//   { id: 'e4', name: 'Mask', price: 100, image: 'mask.jpg', category: 'essentials' },
// ];

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000
//   }
// }));

// // Middleware for session init
// app.use((req, res, next) => {
//   if (!req.session.appointmentCount) req.session.appointmentCount = 0;
//   if (!req.session.cart) req.session.cart = [];
//   next();
// });


// app.post('/api/auction/appointment', async (req, res) => {
//   const { city, date, crop,qunt, name, mobile, aadhar } = req.body;

//   if (!city || !date || !crop ||!qunt || !name || !mobile || !aadhar)
//     return res.status(400).json({ message: 'All fields are required.' });

//   if (!/^\d{10}$/.test(mobile))
//     return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

//   if (!/^\d{12}$/.test(aadhar))
//     return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });


//   try {
//     console.log("👉 Incoming Data:", req.body);
//     const appointment = new AppointmentModel({ city, date, crop , qunt , name, mobile, aadhar });
//     const saved = await appointment.save();

//     const appointmentId = saved._id.toString();
//     // req.session.appointmentCount++;

//     console.log("👉 Incoming Data:", req.body); 

//     res.status(201).json({ message: 'Appointment booked!', appointmentId, appointment: saved });
//   } catch (err) {
//     console.error('DB Save Error:', err);
//     res.status(500).json({ message: 'Error saving appointment.' });
//   }
// });
// app.get('/api/auction/appointments', async (req, res) => {
//   try {
//     const allAppointments = await AppointmentModel.find();
//     res.json(allAppointments);
//   } catch (err) {
//     console.error('Fetch Error:', err);
//     res.status(500).json({ message: 'Failed to fetch appointments' });
//   }
// });


// app.delete('/api/auction/appointment/:id', async (req, res) => {
//   try {
//     const result = await AppointmentModel.findByIdAndDelete(req.params.id);

//     if (!result) return res.status(404).json({ message: 'Appointment not found.' });

//     req.session.appointmentCount = Math.max(req.session.appointmentCount - 1, 0);
//     res.status(200).json({ message: 'Appointment deleted.' });
//   } catch (err) {
//     console.error('DB Delete Error:', err);
//     res.status(500).json({ message: 'Error deleting appointment.' });
//   }
// });


// const mongoose = require('mongoose');

// // Connect to MongoDB (Replace with your MongoDB URI)
// mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));


// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// }); 



// const express = require('express');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const AppointmentModel = require('./models/Appointment');

// const app = express();
// const PORT = 5000;

// // In-memory storage (replace with DB in production)
// let products = [
//   // Section 1: Farm Devices
//   { id: 'p1', name: 'Tractor - Mahindra 475 DI', price: 520000, image: 'tractor1.jpg', category: 'devices' },
//   { id: 'p2', name: 'Tractor - Swaraj 744 FE', price: 610000, image: 'tractor2.jpg', category: 'devices' },
//   { id: 'p3', name: 'Threshing Machine', price: 35000, image: 'thresher.jpg', category: 'devices' },
//   { id: 'p4', name: 'Plough Machine', price: 25000, image: 'plough.jpg', category: 'devices' },
//   { id: 'p5', name: 'Seed Drill', price: 18000, image: 'seeder.jpg', category: 'devices' },
//   { id: 'p6', name: 'Rotavator', price: 30000, image: 'rotavator.jpg', category: 'devices' },
//   { id: 'p7', name: 'Sprayer Pump', price: 5000, image: 'sprayer.jpg', category: 'devices' },
//   { id: 'p8', name: 'Water Pump', price: 15000, image: 'pump.jpg', category: 'devices' },

//   // Section 2: Fertilizers
//   { id: 'f1', name: 'Urea 45kg', price: 300, image: 'urea.jpg', category: 'fertilizers' },
//   { id: 'f2', name: 'DAP 50kg', price: 1100, image: 'dap.jpg', category: 'fertilizers' },
//   { id: 'f3', name: 'Potash 50kg', price: 950, image: 'potash.jpg', category: 'fertilizers' },
//   { id: 'f4', name: 'Organic Compost 40kg', price: 400, image: 'compost.jpg', category: 'fertilizers' },

//   // Section 3: Farm Essentials
//   { id: 'e1', name: 'Gloves (Set of 5)', price: 250, image: 'gloves.jpg', category: 'essentials' },
//   { id: 'e2', name: 'Boots', price: 1200, image: 'boots.jpg', category: 'essentials' },
//   { id: 'e3', name: 'Raincoat', price: 900, image: 'raincoat.jpg', category: 'essentials' },
//   { id: 'e4', name: 'Mask', price: 100, image: 'mask.jpg', category: 'essentials' },
// ];

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000
//   }
// }));

// // Middleware for session init
// app.use((req, res, next) => {
//   if (!req.session.appointmentCount) req.session.appointmentCount = 0;
//   if (!req.session.cart) req.session.cart = [];
//   next();
// });

// // POST - Create Appointment (Auction)
// app.post('/api/auction/appointment', async (req, res) => {
//   const { city, date, crop, qunt, name, mobile, aadhar } = req.body;

//   if (!city || !date || !crop || !qunt || !name || !mobile || !aadhar)
//     return res.status(400).json({ message: 'All fields are required.' });

//   if (!/^\d{10}$/.test(mobile))
//     return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

//   if (!/^\d{12}$/.test(aadhar))
//     return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });

//   try {
//     console.log("👉 Incoming Data:", req.body);
//     const appointment = new AppointmentModel({ city, date, crop, qunt, name, mobile, aadhar });
//     const saved = await appointment.save();

//     const appointmentId = saved._id.toString();

//     console.log("👉 Saved Appointment:", saved);

//     res.status(201).json({ message: 'Appointment booked!', appointmentId, appointment: saved });
//   } catch (err) {
//     console.error('DB Save Error:', err);
//     res.status(500).json({ message: 'Error saving appointment.' });
//   }
// });

// // GET - Get All Appointments (filtered by status if query param given, default Pending)
// app.get('/api/auction/appointments', async (req, res) => {
//   try {
//     const statusFilter = req.query.status || 'Pending';
//     const appointments = await AppointmentModel.find({ status: statusFilter });
//     res.json(appointments);
//   } catch (err) {
//     console.error('Fetch Error:', err);
//     res.status(500).json({ message: 'Failed to fetch appointments' });
//   }
// });

// // DELETE - Delete appointment by ID
// app.delete('/api/auction/appointment/:id', async (req, res) => {
//   try {
//     const result = await AppointmentModel.findByIdAndDelete(req.params.id);

//     if (!result) return res.status(404).json({ message: 'Appointment not found.' });

//     req.session.appointmentCount = Math.max(req.session.appointmentCount - 1, 0);
//     res.status(200).json({ message: 'Appointment deleted.' });
//   } catch (err) {
//     console.error('DB Delete Error:', err);
//     res.status(500).json({ message: 'Error deleting appointment.' });
//   }
// });

// // PUT - Approve/Reject appointment by ID with comments (Admin action)
// app.put('/api/auction/appointments/:id/decision', async (req, res) => {
//   const { id } = req.params;
//   const { status, approverComments } = req.body;

//   if (!['Approved', 'Rejected'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status' });
//   }

//   try {
//     const appointment = await AppointmentModel.findById(id);
//     if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

//     appointment.status = status;
//     appointment.approvalDate = new Date();
//     appointment.approverComments = approverComments || '';
//     await appointment.save();

//     res.json({ message: `Appointment ${status.toLowerCase()} successfully`, appointment });
//   } catch (err) {
//     console.error('Update error:', err);
//     res.status(500).json({ message: 'Failed to update appointment status' });
//   }
// });

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });





const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const AppointmentModel = require('./models/Appointment');

const app = express();
const PORT = 5000;

// In-memory products (unchanged)
let products = [
  // Farm Devices
  { id: 'p1', name: 'Tractor - Mahindra 475 DI', price: 520000, image: 'tractor1.jpg', category: 'devices' },
  { id: 'p2', name: 'Tractor - Swaraj 744 FE', price: 610000, image: 'tractor2.jpg', category: 'devices' },
  { id: 'p3', name: 'Threshing Machine', price: 35000, image: 'thresher.jpg', category: 'devices' },
  { id: 'p4', name: 'Plough Machine', price: 25000, image: 'plough.jpg', category: 'devices' },
  { id: 'p5', name: 'Seed Drill', price: 18000, image: 'seeder.jpg', category: 'devices' },
  { id: 'p6', name: 'Rotavator', price: 30000, image: 'rotavator.jpg', category: 'devices' },
  { id: 'p7', name: 'Sprayer Pump', price: 5000, image: 'sprayer.jpg', category: 'devices' },
  { id: 'p8', name: 'Water Pump', price: 15000, image: 'pump.jpg', category: 'devices' },

  // Fertilizers
  { id: 'f1', name: 'Urea 45kg', price: 300, image: 'urea.jpg', category: 'fertilizers' },
  { id: 'f2', name: 'DAP 50kg', price: 1100, image: 'dap.jpg', category: 'fertilizers' },
  { id: 'f3', name: 'Potash 50kg', price: 950, image: 'potash.jpg', category: 'fertilizers' },
  { id: 'f4', name: 'Organic Compost 40kg', price: 400, image: 'compost.jpg', category: 'fertilizers' },

  // Essentials
  { id: 'e1', name: 'Gloves (Set of 5)', price: 250, image: 'gloves.jpg', category: 'essentials' },
  { id: 'e2', name: 'Boots', price: 1200, image: 'boots.jpg', category: 'essentials' },
  { id: 'e3', name: 'Raincoat', price: 900, image: 'raincoat.jpg', category: 'essentials' },
  { id: 'e4', name: 'Mask', price: 100, image: 'mask.jpg', category: 'essentials' },
];

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use((req, res, next) => {
  if (!req.session.appointmentCount) req.session.appointmentCount = 0;
  if (!req.session.cart) req.session.cart = [];
  next();
});

// POST - Create Appointment (Auction)
app.post('/api/auction/appointment', async (req, res) => {
  const { city, date, crop, qunt, name, mobile, aadhar } = req.body;

  if (!city || !date || !crop || !qunt || !name || !mobile || !aadhar)
    return res.status(400).json({ message: 'All fields are required.' });

  if (!/^\d{10}$/.test(mobile))
    return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

  if (!/^\d{12}$/.test(aadhar))
    return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });

  try {
    console.log("👉 Incoming Data:", req.body);
    const appointment = new AppointmentModel({ city, date, crop, qunt, name, mobile, aadhar });
    const saved = await appointment.save();

    const appointmentId = saved._id.toString();

    console.log("👉 Saved Appointment:", saved);

    res.status(201).json({ message: 'Appointment booked!', appointmentId, appointment: saved });
  } catch (err) {
    console.error('DB Save Error:', err);
    res.status(500).json({ message: 'Error saving appointment.' });
  }
});

// UPDATED GET - Get All Appointments filtered by username and status (supports multiple statuses comma separated)
app.get('/api/auction/appointments', async (req, res) => {
  try {
    const { username, status } = req.query;

    // Build query object
    let query = {};

    // Add username filter if provided
    if (username) {
      query.name = username;  // Assuming 'name' stores username in AppointmentModel
    }

    // Status filter - multiple status support
    if (status) {
      const statusList = status.split(','); // e.g. "Approved,Rejected"
      query.status = { $in: statusList };
    } else {
      // Default to Pending if no status passed
      query.status = 'Pending';
    }

    const appointments = await AppointmentModel.find(query);
    res.json(appointments);
  } catch (err) {
    console.error('Fetch Error:', err);
    res.status(500).json({ message: 'Failed to fetch appointments' });
  }
});

// DELETE - Delete appointment by ID
app.delete('/api/auction/appointment/:id', async (req, res) => {
  try {
    const result = await AppointmentModel.findByIdAndDelete(req.params.id);

    if (!result) return res.status(404).json({ message: 'Appointment not found.' });

    req.session.appointmentCount = Math.max(req.session.appointmentCount - 1, 0);
    res.status(200).json({ message: 'Appointment deleted.' });
  } catch (err) {
    console.error('DB Delete Error:', err);
    res.status(500).json({ message: 'Error deleting appointment.' });
  }
});

// PUT - Approve/Reject appointment by ID with comments (Admin action)
app.put('/api/auction/appointments/:id/decision', async (req, res) => {
  const { id } = req.params;
  const { status, approverComments } = req.body;

  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  try {
    const appointment = await AppointmentModel.findById(id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    appointment.status = status;
    appointment.approvalDate = new Date();
    appointment.approverComments = approverComments || '';
    await appointment.save();

    res.json({ message: `Appointment ${status.toLowerCase()} successfully`, appointment });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Failed to update appointment status' });
  }
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
