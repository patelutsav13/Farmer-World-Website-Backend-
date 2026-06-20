
// // // const AppointmentModel = require('./models/Appointment');
// // // const express = require('express');
// // // const session = require('express-session');
// // // const cookieParser = require('cookie-parser');
// // // const cors = require('cors');
// // // const { v4: uuidv4 } = require('uuid');

// // // const app = express();
// // // const PORT = 5000;

// // // // In-memory storage (replace with DB in production)
// // // let appointments = [];
// // // let products = [];
// // // let orders = [];

// // // // Seed sample products
// // // products = [
// // //   // Section 1: Farm Devices
// // //   { id: 'p1', name: 'Tractor - Mahindra 475 DI', price: 520000, image: 'tractor1.jpg', category: 'devices' },
// // //   { id: 'p2', name: 'Tractor - Swaraj 744 FE', price: 610000, image: 'tractor2.jpg', category: 'devices' },
// // //   { id: 'p3', name: 'Threshing Machine', price: 35000, image: 'thresher.jpg', category: 'devices' },
// // //   { id: 'p4', name: 'Plough Machine', price: 25000, image: 'plough.jpg', category: 'devices' },
// // //   { id: 'p5', name: 'Seed Drill', price: 18000, image: 'seeder.jpg', category: 'devices' },
// // //   { id: 'p6', name: 'Rotavator', price: 30000, image: 'rotavator.jpg', category: 'devices' },
// // //   { id: 'p7', name: 'Sprayer Pump', price: 5000, image: 'sprayer.jpg', category: 'devices' },
// // //   { id: 'p8', name: 'Water Pump', price: 15000, image: 'pump.jpg', category: 'devices' },

// // //   // Section 2: Fertilizers
// // //   { id: 'f1', name: 'Urea 45kg', price: 300, image: 'urea.jpg', category: 'fertilizers' },
// // //   { id: 'f2', name: 'DAP 50kg', price: 1100, image: 'dap.jpg', category: 'fertilizers' },
// // //   { id: 'f3', name: 'Potash 50kg', price: 950, image: 'potash.jpg', category: 'fertilizers' },
// // //   { id: 'f4', name: 'Organic Compost 40kg', price: 400, image: 'compost.jpg', category: 'fertilizers' },

// // //   // Section 3: Farm Essentials
// // //   { id: 'e1', name: 'Gloves (Set of 5)', price: 250, image: 'gloves.jpg', category: 'essentials' },
// // //   { id: 'e2', name: 'Boots', price: 1200, image: 'boots.jpg', category: 'essentials' },
// // //   { id: 'e3', name: 'Raincoat', price: 900, image: 'raincoat.jpg', category: 'essentials' },
// // //   { id: 'e4', name: 'Mask', price: 100, image: 'mask.jpg', category: 'essentials' },
// // // ];

// // // // Middleware
// // // app.use(cors({
// // //   origin: 'http://localhost:3000',
// // //   credentials: true
// // // }));
// // // app.use(express.json());
// // // app.use(cookieParser());
// // // app.use(session({
// // //   secret: 'your-secret-key',
// // //   resave: false,
// // //   saveUninitialized: false,
// // //   cookie: {
// // //     secure: false,
// // //     httpOnly: true,
// // //     maxAge: 24 * 60 * 60 * 1000
// // //   }
// // // }));

// // // // Middleware for session init
// // // app.use((req, res, next) => {
// // //   if (!req.session.appointmentCount) req.session.appointmentCount = 0;
// // //   if (!req.session.cart) req.session.cart = [];
// // //   next();
// // // });


// // // app.post('/api/auction/appointment', async (req, res) => {
// // //   const { city, date, crop,qunt, name, mobile, aadhar } = req.body;

// // //   if (!city || !date || !crop ||!qunt || !name || !mobile || !aadhar)
// // //     return res.status(400).json({ message: 'All fields are required.' });

// // //   if (!/^\d{10}$/.test(mobile))
// // //     return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

// // //   if (!/^\d{12}$/.test(aadhar))
// // //     return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });


// // //   try {
// // //     console.log("👉 Incoming Data:", req.body);
// // //     const appointment = new AppointmentModel({ city, date, crop , qunt , name, mobile, aadhar });
// // //     const saved = await appointment.save();

// // //     const appointmentId = saved._id.toString();
// // //     // req.session.appointmentCount++;

// // //     console.log("👉 Incoming Data:", req.body); 

// // //     res.status(201).json({ message: 'Appointment booked!', appointmentId, appointment: saved });
// // //   } catch (err) {
// // //     console.error('DB Save Error:', err);
// // //     res.status(500).json({ message: 'Error saving appointment.' });
// // //   }
// // // });
// // // app.get('/api/auction/appointments', async (req, res) => {
// // //   try {
// // //     const allAppointments = await AppointmentModel.find();
// // //     res.json(allAppointments);
// // //   } catch (err) {
// // //     console.error('Fetch Error:', err);
// // //     res.status(500).json({ message: 'Failed to fetch appointments' });
// // //   }
// // // });


// // // app.delete('/api/auction/appointment/:id', async (req, res) => {
// // //   try {
// // //     const result = await AppointmentModel.findByIdAndDelete(req.params.id);

// // //     if (!result) return res.status(404).json({ message: 'Appointment not found.' });

// // //     req.session.appointmentCount = Math.max(req.session.appointmentCount - 1, 0);
// // //     res.status(200).json({ message: 'Appointment deleted.' });
// // //   } catch (err) {
// // //     console.error('DB Delete Error:', err);
// // //     res.status(500).json({ message: 'Error deleting appointment.' });
// // //   }
// // // });


// // // const mongoose = require('mongoose');

// // // // Connect to MongoDB (Replace with your MongoDB URI)
// // // mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // // .then(() => console.log('✅ Connected to MongoDB'))
// // // .catch((err) => console.error('❌ MongoDB connection error:', err));


// // // app.listen(PORT, () => {
// // //   console.log(`Server running at http://localhost:${PORT}`);
// // // }); 



// // // const express = require('express');
// // // const session = require('express-session');
// // // const cookieParser = require('cookie-parser');
// // // const cors = require('cors');
// // // const mongoose = require('mongoose');
// // // const AppointmentModel = require('./models/Appointment');

// // // const app = express();
// // // const PORT = 5000;

// // // // In-memory storage (replace with DB in production)
// // // let products = [
// // //   // Section 1: Farm Devices
// // //   { id: 'p1', name: 'Tractor - Mahindra 475 DI', price: 520000, image: 'tractor1.jpg', category: 'devices' },
// // //   { id: 'p2', name: 'Tractor - Swaraj 744 FE', price: 610000, image: 'tractor2.jpg', category: 'devices' },
// // //   { id: 'p3', name: 'Threshing Machine', price: 35000, image: 'thresher.jpg', category: 'devices' },
// // //   { id: 'p4', name: 'Plough Machine', price: 25000, image: 'plough.jpg', category: 'devices' },
// // //   { id: 'p5', name: 'Seed Drill', price: 18000, image: 'seeder.jpg', category: 'devices' },
// // //   { id: 'p6', name: 'Rotavator', price: 30000, image: 'rotavator.jpg', category: 'devices' },
// // //   { id: 'p7', name: 'Sprayer Pump', price: 5000, image: 'sprayer.jpg', category: 'devices' },
// // //   { id: 'p8', name: 'Water Pump', price: 15000, image: 'pump.jpg', category: 'devices' },

// // //   // Section 2: Fertilizers
// // //   { id: 'f1', name: 'Urea 45kg', price: 300, image: 'urea.jpg', category: 'fertilizers' },
// // //   { id: 'f2', name: 'DAP 50kg', price: 1100, image: 'dap.jpg', category: 'fertilizers' },
// // //   { id: 'f3', name: 'Potash 50kg', price: 950, image: 'potash.jpg', category: 'fertilizers' },
// // //   { id: 'f4', name: 'Organic Compost 40kg', price: 400, image: 'compost.jpg', category: 'fertilizers' },

// // //   // Section 3: Farm Essentials
// // //   { id: 'e1', name: 'Gloves (Set of 5)', price: 250, image: 'gloves.jpg', category: 'essentials' },
// // //   { id: 'e2', name: 'Boots', price: 1200, image: 'boots.jpg', category: 'essentials' },
// // //   { id: 'e3', name: 'Raincoat', price: 900, image: 'raincoat.jpg', category: 'essentials' },
// // //   { id: 'e4', name: 'Mask', price: 100, image: 'mask.jpg', category: 'essentials' },
// // // ];

// // // // Middleware
// // // app.use(cors({
// // //   origin: 'http://localhost:3000',
// // //   credentials: true
// // // }));
// // // app.use(express.json());
// // // app.use(cookieParser());
// // // app.use(session({
// // //   secret: 'your-secret-key',
// // //   resave: false,
// // //   saveUninitialized: false,
// // //   cookie: {
// // //     secure: false,
// // //     httpOnly: true,
// // //     maxAge: 24 * 60 * 60 * 1000
// // //   }
// // // }));

// // // // Middleware for session init
// // // app.use((req, res, next) => {
// // //   if (!req.session.appointmentCount) req.session.appointmentCount = 0;
// // //   if (!req.session.cart) req.session.cart = [];
// // //   next();
// // // });

// // // // POST - Create Appointment (Auction)
// // // app.post('/api/auction/appointment', async (req, res) => {
// // //   const { city, date, crop, qunt, name, mobile, aadhar } = req.body;

// // //   if (!city || !date || !crop || !qunt || !name || !mobile || !aadhar)
// // //     return res.status(400).json({ message: 'All fields are required.' });

// // //   if (!/^\d{10}$/.test(mobile))
// // //     return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

// // //   if (!/^\d{12}$/.test(aadhar))
// // //     return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });

// // //   try {
// // //     console.log("👉 Incoming Data:", req.body);
// // //     const appointment = new AppointmentModel({ city, date, crop, qunt, name, mobile, aadhar });
// // //     const saved = await appointment.save();

// // //     const appointmentId = saved._id.toString();

// // //     console.log("👉 Saved Appointment:", saved);

// // //     res.status(201).json({ message: 'Appointment booked!', appointmentId, appointment: saved });
// // //   } catch (err) {
// // //     console.error('DB Save Error:', err);
// // //     res.status(500).json({ message: 'Error saving appointment.' });
// // //   }
// // // });

// // // // GET - Get All Appointments (filtered by status if query param given, default Pending)
// // // app.get('/api/auction/appointments', async (req, res) => {
// // //   try {
// // //     const statusFilter = req.query.status || 'Pending';
// // //     const appointments = await AppointmentModel.find({ status: statusFilter });
// // //     res.json(appointments);
// // //   } catch (err) {
// // //     console.error('Fetch Error:', err);
// // //     res.status(500).json({ message: 'Failed to fetch appointments' });
// // //   }
// // // });

// // // // DELETE - Delete appointment by ID
// // // app.delete('/api/auction/appointment/:id', async (req, res) => {
// // //   try {
// // //     const result = await AppointmentModel.findByIdAndDelete(req.params.id);

// // //     if (!result) return res.status(404).json({ message: 'Appointment not found.' });

// // //     req.session.appointmentCount = Math.max(req.session.appointmentCount - 1, 0);
// // //     res.status(200).json({ message: 'Appointment deleted.' });
// // //   } catch (err) {
// // //     console.error('DB Delete Error:', err);
// // //     res.status(500).json({ message: 'Error deleting appointment.' });
// // //   }
// // // });

// // // // PUT - Approve/Reject appointment by ID with comments (Admin action)
// // // app.put('/api/auction/appointments/:id/decision', async (req, res) => {
// // //   const { id } = req.params;
// // //   const { status, approverComments } = req.body;

// // //   if (!['Approved', 'Rejected'].includes(status)) {
// // //     return res.status(400).json({ message: 'Invalid status' });
// // //   }

// // //   try {
// // //     const appointment = await AppointmentModel.findById(id);
// // //     if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

// // //     appointment.status = status;
// // //     appointment.approvalDate = new Date();
// // //     appointment.approverComments = approverComments || '';
// // //     await appointment.save();

// // //     res.json({ message: `Appointment ${status.toLowerCase()} successfully`, appointment });
// // //   } catch (err) {
// // //     console.error('Update error:', err);
// // //     res.status(500).json({ message: 'Failed to update appointment status' });
// // //   }
// // // });

// // // // Connect to MongoDB
// // // mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // // .then(() => console.log('✅ Connected to MongoDB'))
// // // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // // Start server
// // // app.listen(PORT, () => {
// // //   console.log(`Server running at http://localhost:${PORT}`);
// // // });





// // require('dotenv').config();
// // const express = require('express');
// // const session = require('express-session');
// // const cookieParser = require('cookie-parser');
// // const cors = require('cors');
// // const mongoose = require('mongoose');
// // const AppointmentModel = require('./models/Appointment');
// // const AuctionSlotModel = require('./models/AuctionSlot');

// // const app = express();
// // const PORT = process.env.PORT_AUCTION || 5000;

// // // In-memory products (unchanged)
// // let products = [
// //   // Farm Devices
// //   { id: 'p1', name: 'Tractor - Mahindra 475 DI', price: 520000, image: 'tractor1.jpg', category: 'devices' },
// //   { id: 'p2', name: 'Tractor - Swaraj 744 FE', price: 610000, image: 'tractor2.jpg', category: 'devices' },
// //   { id: 'p3', name: 'Threshing Machine', price: 35000, image: 'thresher.jpg', category: 'devices' },
// //   { id: 'p4', name: 'Plough Machine', price: 25000, image: 'plough.jpg', category: 'devices' },
// //   { id: 'p5', name: 'Seed Drill', price: 18000, image: 'seeder.jpg', category: 'devices' },
// //   { id: 'p6', name: 'Rotavator', price: 30000, image: 'rotavator.jpg', category: 'devices' },
// //   { id: 'p7', name: 'Sprayer Pump', price: 5000, image: 'sprayer.jpg', category: 'devices' },
// //   { id: 'p8', name: 'Water Pump', price: 15000, image: 'pump.jpg', category: 'devices' },

// //   // Fertilizers
// //   { id: 'f1', name: 'Urea 45kg', price: 300, image: 'urea.jpg', category: 'fertilizers' },
// //   { id: 'f2', name: 'DAP 50kg', price: 1100, image: 'dap.jpg', category: 'fertilizers' },
// //   { id: 'f3', name: 'Potash 50kg', price: 950, image: 'potash.jpg', category: 'fertilizers' },
// //   { id: 'f4', name: 'Organic Compost 40kg', price: 400, image: 'compost.jpg', category: 'fertilizers' },

// //   // Essentials
// //   { id: 'e1', name: 'Gloves (Set of 5)', price: 250, image: 'gloves.jpg', category: 'essentials' },
// //   { id: 'e2', name: 'Boots', price: 1200, image: 'boots.jpg', category: 'essentials' },
// //   { id: 'e3', name: 'Raincoat', price: 900, image: 'raincoat.jpg', category: 'essentials' },
// //   { id: 'e4', name: 'Mask', price: 100, image: 'mask.jpg', category: 'essentials' },
// // ];

// // // Middleware
// // app.use(cors({
// //   origin: 'http://localhost:3000',
// //   credentials: true
// // }));
// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(session({
// //   secret: 'your-secret-key',
// //   resave: false,
// //   saveUninitialized: false,
// //   cookie: {
// //     secure: false,
// //     httpOnly: true,
// //     maxAge: 24 * 60 * 60 * 1000
// //   }
// // }));

// // app.use((req, res, next) => {
// //   if (!req.session.appointmentCount) req.session.appointmentCount = 0;
// //   if (!req.session.cart) req.session.cart = [];
// //   next();
// // });

// // // GET - Retrieve active auction slots with calculated remaining capacity
// // app.get('/api/auction/slots', async (req, res) => {
// //   try {
// //     const slots = await AuctionSlotModel.find();
// //     const result = await Promise.all(slots.map(async (slot) => {
// //       // Count non-rejected appointments booked for this slot
// //       const count = await AppointmentModel.countDocuments({ slotId: slot._id.toString(), status: { $ne: 'Rejected' } });
// //       return {
// //         _id: slot._id,
// //         area: slot.area,
// //         crop: slot.crop,
// //         date: slot.date,
// //         time: slot.time,
// //         capacity: slot.capacity,
// //         remainingCapacity: Math.max(0, slot.capacity - count)
// //       };
// //     }));
// //     res.json(result);
// //   } catch (err) {
// //     console.error('Fetch slots error:', err);
// //     res.status(500).json({ message: 'Failed to fetch auction slots' });
// //   }
// // });

// // // POST - Create a new Auction slot (Admin action)
// // app.post('/api/auction/slots', async (req, res) => {
// //   const { area, crop, date, time, capacity } = req.body;
// //   if (!area || !crop || !date || !time || !capacity) {
// //     return res.status(400).json({ message: 'All fields are required.' });
// //   }
// //   try {
// //     const newSlot = new AuctionSlotModel({ area, crop, date, time, capacity: Number(capacity) });
// //     await newSlot.save();
// //     res.status(201).json({ message: 'Auction slot created successfully!', slot: newSlot });
// //   } catch (err) {
// //     console.error('Save slot error:', err);
// //     res.status(500).json({ message: 'Failed to create auction slot.' });
// //   }
// // });

// // // POST - Create Appointment (Auction)
// // app.post('/api/auction/appointment', async (req, res) => {
// //   const { city, date, crop, qunt, name, mobile, aadhar, slotId } = req.body;

// //   if (!city || !date || !crop || !qunt || !name || !mobile || !aadhar)
// //     return res.status(400).json({ message: 'All fields are required.' });

// //   if (!/^\d{10}$/.test(mobile))
// //     return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

// //   if (!/^\d{12}$/.test(aadhar))
// //     return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });

// //   try {
// //     if (slotId) {
// //       const slot = await AuctionSlotModel.findById(slotId);
// //       if (slot) {
// //         const count = await AppointmentModel.countDocuments({ slotId, status: { $ne: 'Rejected' } });
// //         if (count >= slot.capacity) {
// //           return res.status(400).json({ message: `❌ Booking failed. This slot for ${slot.crop} at ${slot.area} is full!` });
// //         }
// //       }
// //     }

// //     console.log("👉 Incoming Appointment Data:", req.body);
// //     const appointment = new AppointmentModel({ city, date, crop, qunt, name, mobile, aadhar, slotId });
// //     const saved = await appointment.save();

// //     const appointmentId = saved._id.toString();
// //     console.log("👉 Saved Appointment:", saved);

// //     res.status(201).json({ message: 'Appointment booked successfully!', appointmentId, appointment: saved });
// //   } catch (err) {
// //     console.error('DB Save Error:', err);
// //     res.status(500).json({ message: 'Error saving appointment.' });
// //   }
// // });

// // // UPDATED GET - Get All Appointments filtered by username and status (supports multiple statuses comma separated)
// // app.get('/api/auction/appointments', async (req, res) => {
// //   try {
// //     const { username, status } = req.query;

// //     // Build query object
// //     let query = {};

// //     // Add username filter if provided
// //     if (username) {
// //       query.name = username;  // Assuming 'name' stores username in AppointmentModel
// //     }

// //     // Status filter - multiple status support
// //     if (status) {
// //       const statusList = status.split(','); // e.g. "Approved,Rejected"
// //       query.status = { $in: statusList };
// //     } else {
// //       // Default to Pending if no status passed
// //       query.status = 'Pending';
// //     }

// //     const appointments = await AppointmentModel.find(query);
// //     res.json(appointments);
// //   } catch (err) {
// //     console.error('Fetch Error:', err);
// //     res.status(500).json({ message: 'Failed to fetch appointments' });
// //   }
// // });

// // // DELETE - Delete appointment by ID
// // app.delete('/api/auction/appointment/:id', async (req, res) => {
// //   try {
// //     const result = await AppointmentModel.findByIdAndDelete(req.params.id);

// //     if (!result) return res.status(404).json({ message: 'Appointment not found.' });

// //     req.session.appointmentCount = Math.max(req.session.appointmentCount - 1, 0);
// //     res.status(200).json({ message: 'Appointment deleted.' });
// //   } catch (err) {
// //     console.error('DB Delete Error:', err);
// //     res.status(500).json({ message: 'Error deleting appointment.' });
// //   }
// // });

// // // PUT - Approve/Reject appointment by ID with comments (Admin action)
// // app.put('/api/auction/appointments/:id/decision', async (req, res) => {
// //   const { id } = req.params;
// //   const { status, approverComments } = req.body;

// //   if (!['Approved', 'Rejected'].includes(status)) {
// //     return res.status(400).json({ message: 'Invalid status' });
// //   }

// //   try {
// //     const appointment = await AppointmentModel.findById(id);
// //     if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

// //     appointment.status = status;
// //     appointment.approvalDate = new Date();
// //     appointment.approverComments = approverComments || '';
// //     await appointment.save();

// //     res.json({ message: `Appointment ${status.toLowerCase()} successfully`, appointment });
// //   } catch (err) {
// //     console.error('Update error:', err);
// //     res.status(500).json({ message: 'Failed to update appointment status' });
// //   }
// // });

// // // PUT - Bulk Approve/Reject appointments
// // app.put('/api/auction/appointments/bulk-decision', async (req, res) => {
// //   const { status, approverComments } = req.body;
// //   if (!['Approved', 'Rejected'].includes(status)) {
// //     return res.status(400).json({ message: 'Invalid status' });
// //   }
// //   try {
// //     await AppointmentModel.updateMany(
// //       { status: 'Pending' },
// //       { $set: { status, approvalDate: new Date(), approverComments: approverComments || '' } }
// //     );
// //     res.json({ message: `All pending appointments ${status.toLowerCase()}ed successfully` });
// //   } catch (err) {
// //     console.error('Bulk update error:', err);
// //     res.status(500).json({ message: 'Bulk action failed' });
// //   }
// // });

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_SYSTEM_URI || 'mongodb://127.0.0.1:27017/farmersystem', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// // .then(() => console.log('✅ Connected to MongoDB'))
// // .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });





// require('dotenv').config();
// const express = require('express');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

// // Import Models
// const AppointmentModel = require('./models/Appointment');
// const AuctionSlotModel = require('./models/AuctionSlot');
// const OrderModel = require('./models/Order');
// const LoanForm = require('./models/LoanForm');

// // Auth Model (originally in server3.js)
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   resetToken: String,
//   resetTokenExpiry: Date
// });
// const User = mongoose.model('User', userSchema);

// const app = express();
// const PORT = process.env.PORT || process.env.PORT_AUCTION || 5000;

// // Connect to MongoDB (All services share this connection)
// mongoose.connect(process.env.MONGO_SYSTEM_URI || 'mongodb://127.0.0.1:27017/farmersystem', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Connected to MongoDB (Combined Server)'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Nodemailer Transporter (for password reset)
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.MY_GMAIL,
//     pass: process.env.MY_GMAIL_PASS
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:5173', process.env.CLIENT_URL].filter(Boolean),
//   credentials: true
// }));
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cookieParser());

// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: false,
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000 // 1 day
//   }
// }));

// // Session Initializer
// app.use((req, res, next) => {
//   if (!req.session.appointmentCount) req.session.appointmentCount = 0;
//   if (!req.session.cart) req.session.cart = [];
//   next();
// });

// // ==========================================
// // 1. AUCTION ROUTES (originally server.js)
// // ==========================================

// // GET - Retrieve active auction slots
// app.get('/api/auction/slots', async (req, res) => {
//   try {
//     const slots = await AuctionSlotModel.find();
//     const result = await Promise.all(slots.map(async (slot) => {
//       const count = await AppointmentModel.countDocuments({ slotId: slot._id.toString(), status: { $ne: 'Rejected' } });
//       return {
//         _id: slot._id,
//         area: slot.area,
//         crop: slot.crop,
//         date: slot.date,
//         time: slot.time,
//         capacity: slot.capacity,
//         remainingCapacity: Math.max(0, slot.capacity - count)
//       };
//     }));
//     res.json(result);
//   } catch (err) {
//     console.error('Fetch slots error:', err);
//     res.status(500).json({ message: 'Failed to fetch auction slots' });
//   }
// });

// // POST - Create a new Auction slot
// app.post('/api/auction/slots', async (req, res) => {
//   const { area, crop, date, time, capacity } = req.body;
//   if (!area || !crop || !date || !time || !capacity) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }
//   try {
//     const newSlot = new AuctionSlotModel({ area, crop, date, time, capacity: Number(capacity) });
//     await newSlot.save();
//     res.status(201).json({ message: 'Auction slot created successfully!', slot: newSlot });
//   } catch (err) {
//     console.error('Save slot error:', err);
//     res.status(500).json({ message: 'Failed to create auction slot.' });
//   }
// });

// // POST - Create Appointment
// app.post('/api/auction/appointment', async (req, res) => {
//   const { city, date, crop, qunt, name, mobile, aadhar, slotId } = req.body;

//   if (!city || !date || !crop || !qunt || !name || !mobile || !aadhar)
//     return res.status(400).json({ message: 'All fields are required.' });

//   if (!/^\d{10}$/.test(mobile))
//     return res.status(400).json({ message: 'Mobile number must be 10 digits.' });

//   if (!/^\d{12}$/.test(aadhar))
//     return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });

//   try {
//     if (slotId) {
//       const slot = await AuctionSlotModel.findById(slotId);
//       if (slot) {
//         const count = await AppointmentModel.countDocuments({ slotId, status: { $ne: 'Rejected' } });
//         if (count >= slot.capacity) {
//           return res.status(400).json({ message: `❌ Booking failed. This slot for ${slot.crop} at ${slot.area} is full!` });
//         }
//       }
//     }

//     console.log("👉 Incoming Appointment Data:", req.body);
//     const appointment = new AppointmentModel({ city, date, crop, qunt, name, mobile, aadhar, slotId });
//     const saved = await appointment.save();

//     const appointmentId = saved._id.toString();
//     res.status(201).json({ message: 'Appointment booked successfully!', appointmentId, appointment: saved });
//   } catch (err) {
//     console.error('DB Save Error:', err);
//     res.status(500).json({ message: 'Error saving appointment.' });
//   }
// });

// // GET - Get All Appointments
// app.get('/api/auction/appointments', async (req, res) => {
//   try {
//     const { username, status } = req.query;
//     let query = {};

//     if (username) {
//       query.name = username;
//     }

//     if (status) {
//       const statusList = status.split(',');
//       query.status = { $in: statusList };
//     } else {
//       query.status = 'Pending';
//     }

//     const appointments = await AppointmentModel.find(query);
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

// // PUT - Approve/Reject appointment by ID with comments
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

// // PUT - Bulk Approve/Reject appointments
// app.put('/api/auction/appointments/bulk-decision', async (req, res) => {
//   const { status, approverComments } = req.body;
//   if (!['Approved', 'Rejected'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status' });
//   }
//   try {
//     await AppointmentModel.updateMany(
//       { status: 'Pending' },
//       { $set: { status, approvalDate: new Date(), approverComments: approverComments || '' } }
//     );
//     res.json({ message: `All pending appointments ${status.toLowerCase()}ed successfully` });
//   } catch (err) {
//     console.error('Bulk update error:', err);
//     res.status(500).json({ message: 'Bulk action failed' });
//   }
// });

// // ==========================================
// // 2. CART ROUTES (originally server1.js)
// // ==========================================

// // POST - Add product to cart
// app.post('/api/cart', (req, res) => {
//   const { productId, name, price, quantity = 1 } = req.body;

//   if (!productId || !name || !price) {
//     return res.status(400).json({ message: 'Invalid product data' });
//   }

//   const cart = req.session.cart;
//   const existing = cart.find(item => item.productId === productId);

//   if (existing) {
//     existing.quantity += quantity;
//   } else {
//     cart.push({ productId, name, price, quantity });
//   }

//   res.status(200).json({ message: '✅ Added to cart', cart });
// });

// // GET - Get current cart
// app.get('/api/cart', (req, res) => {
//   res.json({ cart: req.session.cart });
// });

// // POST - Place an order
// app.post('/api/order', async (req, res) => {
//   const { name, mobile, address, paymentType, totalAmount } = req.body;
//   const cart = req.session.cart;

//   if (!name || !mobile || !address || !paymentType) {
//     return res.status(400).json({ message: '❌ All fields are required.' });
//   }

//   if (!cart || cart.length === 0) {
//     return res.status(400).json({ message: '❌ Cart is empty.' });
//   }

//   try {
//     const newOrder = new OrderModel({
//       name,
//       mobile,
//       address,
//       paymentType,
//       totalAmount,
//       items: cart
//     });

//     await newOrder.save();
//     console.log('🛒 Order saved in MongoDB:', newOrder);

//     req.session.cart = []; // Clear cart after order
//     res.status(201).json({ message: '✅ Order placed successfully!' });
//   } catch (err) {
//     console.error('❌ Error saving order:', err);
//     res.status(500).json({ message: '❌ Failed to save order.' });
//   }
// });

// // ==========================================
// // 3. LOAN ROUTES (originally server2.js)
// // ==========================================

// // POST - Save Loan Form
// app.post('/api/loan/apply', async (req, res) => {
//   const formData = {
//     name: req.body.name,
//     age: req.body.age,
//     occupation: req.body.occupation,
//     income: req.body.income,
//     bankName: req.body.bankName,
//     branchName: req.body.branchName,
//     pancardFile: req.body.pancardFile || '',
//     otherDocsFiles: req.body.otherDocsFiles || []
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

// // GET - Fetch Loan Form (for review)
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

// // GET - Get all loan forms
// app.get('/api/loan/forms', async (req, res) => {
//   try {
//     const { username, status } = req.query;
//     let query = {};

//     if (username) {
//       query.name = username;
//     }

//     if (status) {
//       const statusList = status.split(',');
//       query.status = { $in: statusList };
//     } else {
//       query.status = 'Pending';
//     }

//     const forms = await LoanForm.find(query);
//     res.json(forms);
//   } catch (err) {
//     console.error('Loan forms fetch error:', err);
//     res.status(500).json({ message: 'Failed to fetch loan forms' });
//   }
// });

// // PUT - Approve/Reject loan form by ID
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
//     console.error('Failed to update loan form:', err);
//     res.status(500).json({ message: 'Failed to update loan form' });
//   }
// });

// // PUT - Bulk Approve/Reject loan forms
// app.put('/api/loan/forms/bulk-decision', async (req, res) => {
//   const { status, approverComments } = req.body;
//   if (!['Approved', 'Rejected'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status' });
//   }
//   try {
//     await LoanForm.updateMany(
//       { status: 'Pending' },
//       { $set: { status, approvalDate: new Date(), approverComments: approverComments || '' } }
//     );
//     res.json({ message: `All pending loans ${status.toLowerCase()}ed successfully` });
//   } catch (err) {
//     console.error('Bulk update error:', err);
//     res.status(500).json({ message: 'Bulk action failed' });
//   }
// });

// // ==========================================
// // 4. AUTH ROUTES (originally server3.js)
// // ==========================================

// // Signup API
// app.post('/api/signup', async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ message: 'Internal server error during signup' });
//   }
// });

// // Login API
// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     res.json({
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email
//       }
//     });
//     console.log('Login attempt:', email);
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Internal server error during login' });
//   }
// });

// // Forgot Password API
// app.post('/api/forgot-password', async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Email not registered' });
//     }

//     const token = crypto.randomBytes(32).toString('hex');
//     user.resetToken = token;
//     user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
//     await user.save();

//     const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
//     const resetLink = `${clientUrl}/reset-password/${token}`;

//     await transporter.sendMail({
//       from: `"Farmers App" <${process.env.MY_GMAIL}>`,
//       to: email,
//       subject: 'Password Reset',
//       html: `<p>You requested a password reset</p>
//              <p>Click here to reset: <a href="${resetLink}">${resetLink}</a></p>
//              <p>Link valid for 15 minutes</p>`
//     });

//     res.json({ message: 'Password reset link sent to your email' });
//   } catch (err) {
//     console.error('Forgot password error:', err);
//     res.status(500).json({ message: 'Error sending reset link' });
//   }
// });

// // Reset Password API
// app.post('/api/reset-password/:token', async (req, res) => {
//   const { token } = req.params;
//   const { password } = req.body;

//   try {
//     const user = await User.findOne({
//       resetToken: token,
//       resetTokenExpiry: { $gt: Date.now() }
//     });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid or expired token' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     user.password = hashedPassword;
//     user.resetToken = undefined;
//     user.resetTokenExpiry = undefined;
//     await user.save();

//     res.json({ message: 'Password reset successful' });
//   } catch (err) {
//     console.error('Reset password error:', err);
//     res.status(500).json({ message: 'Error resetting password' });
//   }
// });

// // ==========================================
// // 5. DEFAULT ROUTE & SERVER LISTEN
// // ==========================================

// app.get('/', (req, res) => {
//   res.json({
//     message: '🚀 Combined Farmers Backend Server Running Successfully!',
//     services: ['Auction', 'Cart', 'Loan', 'Auth']
//   });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Combined backend server running on http://localhost:${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// Import Models
const AppointmentModel = require('./models/Appointment');
const AuctionSlotModel = require('./models/AuctionSlot');
const OrderModel = require('./models/Order');
const LoanForm = require('./models/LoanForm');
// Auth Model (originally in server3.js)
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  resetToken: String,
  resetTokenExpiry: Date
});
const app = express();
const PORT = process.env.PORT || process.env.PORT_AUCTION || 5000;
// Connect to MongoDB System Database
mongoose.connect(process.env.MONGO_SYSTEM_URI || 'mongodb://127.0.0.1:27017/farmersystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB System Database'))
.catch((err) => console.error('❌ MongoDB System connection error:', err));
// Connect to MongoDB Auth Database (separate connection for user accounts)
const authConnection = mongoose.createConnection(process.env.MONGO_AUTH_URI || 'mongodb://127.0.0.1:27017/farmers-auth');
authConnection.on('connected', () => console.log('✅ Connected to MongoDB Auth Database'));
authConnection.on('error', (err) => console.error('❌ MongoDB Auth connection error:', err));
// Register User model on the Auth connection
const User = authConnection.model('User', userSchema);
// Nodemailer Transporter (for password reset)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_GMAIL,
    pass: process.env.MY_GMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});
// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', process.env.CLIENT_URL].filter(Boolean),
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
}));
// Session Initializer
app.use((req, res, next) => {
  if (!req.session.appointmentCount) req.session.appointmentCount = 0;
  if (!req.session.cart) req.session.cart = [];
  next();
});
// ==========================================
// 1. AUCTION ROUTES (originally server.js)
// ==========================================
// GET - Retrieve active auction slots
app.get('/api/auction/slots', async (req, res) => {
  try {
    const slots = await AuctionSlotModel.find();
    const result = await Promise.all(slots.map(async (slot) => {
      const count = await AppointmentModel.countDocuments({ slotId: slot._id.toString(), status: { $ne: 'Rejected' } });
      return {
        _id: slot._id,
        area: slot.area,
        crop: slot.crop,
        date: slot.date,
        time: slot.time,
        capacity: slot.capacity,
        remainingCapacity: Math.max(0, slot.capacity - count)
      };
    }));
    res.json(result);
  } catch (err) {
    console.error('Fetch slots error:', err);
    res.status(500).json({ message: 'Failed to fetch auction slots' });
  }
});
// POST - Create a new Auction slot
app.post('/api/auction/slots', async (req, res) => {
  const { area, crop, date, time, capacity } = req.body;
  if (!area || !crop || !date || !time || !capacity) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  try {
    const newSlot = new AuctionSlotModel({ area, crop, date, time, capacity: Number(capacity) });
    await newSlot.save();
    res.status(201).json({ message: 'Auction slot created successfully!', slot: newSlot });
  } catch (err) {
    console.error('Save slot error:', err);
    res.status(500).json({ message: 'Failed to create auction slot.' });
  }
});
// POST - Create Appointment
app.post('/api/auction/appointment', async (req, res) => {
  const { city, date, crop, qunt, name, mobile, aadhar, slotId } = req.body;
  if (!city || !date || !crop || !qunt || !name || !mobile || !aadhar)
    return res.status(400).json({ message: 'All fields are required.' });
  if (!/^\d{10}$/.test(mobile))
    return res.status(400).json({ message: 'Mobile number must be 10 digits.' });
  if (!/^\d{12}$/.test(aadhar))
    return res.status(400).json({ message: 'Aadhar number must be 12 digits.' });
  try {
    if (slotId) {
      const slot = await AuctionSlotModel.findById(slotId);
      if (slot) {
        const count = await AppointmentModel.countDocuments({ slotId, status: { $ne: 'Rejected' } });
        if (count >= slot.capacity) {
          return res.status(400).json({ message: `❌ Booking failed. This slot for ${slot.crop} at ${slot.area} is full!` });
        }
      }
    }
    console.log("👉 Incoming Appointment Data:", req.body);
    const appointment = new AppointmentModel({ city, date, crop, qunt, name, mobile, aadhar, slotId });
    const saved = await appointment.save();
    const appointmentId = saved._id.toString();
    res.status(201).json({ message: 'Appointment booked successfully!', appointmentId, appointment: saved });
  } catch (err) {
    console.error('DB Save Error:', err);
    res.status(500).json({ message: 'Error saving appointment.' });
  }
});
// GET - Get All Appointments
app.get('/api/auction/appointments', async (req, res) => {
  try {
    const { username, status } = req.query;
    let query = {};
    if (username) {
      query.name = username;
    }
    if (status) {
      const statusList = status.split(',');
      query.status = { $in: statusList };
    } else {
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
// PUT - Approve/Reject appointment by ID with comments
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
// PUT - Bulk Approve/Reject appointments
app.put('/api/auction/appointments/bulk-decision', async (req, res) => {
  const { status, approverComments } = req.body;
  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }
  try {
    await AppointmentModel.updateMany(
      { status: 'Pending' },
      { $set: { status, approvalDate: new Date(), approverComments: approverComments || '' } }
    );
    res.json({ message: `All pending appointments ${status.toLowerCase()}ed successfully` });
  } catch (err) {
    console.error('Bulk update error:', err);
    res.status(500).json({ message: 'Bulk action failed' });
  }
});
// ==========================================
// 2. CART ROUTES (originally server1.js)
// ==========================================
// POST - Add product to cart
app.post('/api/cart', (req, res) => {
  const { productId, name, price, quantity = 1 } = req.body;
  if (!productId || !name || !price) {
    return res.status(400).json({ message: 'Invalid product data' });
  }
  const cart = req.session.cart;
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, name, price, quantity });
  }
  res.status(200).json({ message: '✅ Added to cart', cart });
});
// GET - Get current cart
app.get('/api/cart', (req, res) => {
  res.json({ cart: req.session.cart });
});
// POST - Place an order
app.post('/api/order', async (req, res) => {
  const { name, mobile, address, paymentType, totalAmount } = req.body;
  const cart = req.session.cart;
  if (!name || !mobile || !address || !paymentType) {
    return res.status(400).json({ message: '❌ All fields are required.' });
  }
  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: '❌ Cart is empty.' });
  }
  try {
    const newOrder = new OrderModel({
      name,
      mobile,
      address,
      paymentType,
      totalAmount,
      items: cart
    });
    await newOrder.save();
    console.log('🛒 Order saved in MongoDB:', newOrder);
    req.session.cart = []; // Clear cart after order
    res.status(201).json({ message: '✅ Order placed successfully!' });
  } catch (err) {
    console.error('❌ Error saving order:', err);
    res.status(500).json({ message: '❌ Failed to save order.' });
  }
});
// ==========================================
// 3. LOAN ROUTES (originally server2.js)
// ==========================================
// POST - Save Loan Form
app.post('/api/loan/apply', async (req, res) => {
  const formData = {
    name: req.body.name,
    age: req.body.age,
    occupation: req.body.occupation,
    income: req.body.income,
    bankName: req.body.bankName,
    branchName: req.body.branchName,
    pancardFile: req.body.pancardFile || '',
    otherDocsFiles: req.body.otherDocsFiles || []
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
// GET - Fetch Loan Form (for review)
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
// DELETE - Unsubmit Loan Form
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
// GET - Get all loan forms
app.get('/api/loan/forms', async (req, res) => {
  try {
    const { username, status } = req.query;
    let query = {};
    if (username) {
      query.name = username;
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
// PUT - Approve/Reject loan form by ID
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
    console.error('Failed to update loan form:', err);
    res.status(500).json({ message: 'Failed to update loan form' });
  }
});
// PUT - Bulk Approve/Reject loan forms
app.put('/api/loan/forms/bulk-decision', async (req, res) => {
  const { status, approverComments } = req.body;
  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }
  try {
    await LoanForm.updateMany(
      { status: 'Pending' },
      { $set: { status, approvalDate: new Date(), approverComments: approverComments || '' } }
    );
    res.json({ message: `All pending loans ${status.toLowerCase()}ed successfully` });
  } catch (err) {
    console.error('Bulk update error:', err);
    res.status(500).json({ message: 'Bulk action failed' });
  }
});
// ==========================================
// 4. AUTH ROUTES (originally server3.js)
// ==========================================
// Signup API
app.post('/api/signup', async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error during signup' });
  }
});
// Login API
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.json({
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
    console.log('Login attempt:', email);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error during login' });
  }
});
// Forgot Password API
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not registered' });
    }
    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
    const resetLink = `${clientUrl}/reset-password/${token}`;
    await transporter.sendMail({
      from: `"Farmers App" <${process.env.MY_GMAIL}>`,
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset</p>
             <p>Click here to reset: <a href="${resetLink}">${resetLink}</a></p>
             <p>Link valid for 15 minutes</p>`
    });
    res.json({ message: 'Password reset link sent to your email' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: 'Error sending reset link' });
  }
});
// Reset Password API
app.post('/api/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();
    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ message: 'Error resetting password' });
  }
});
// ==========================================
// 5. DEFAULT ROUTE & SERVER LISTEN
// ==========================================
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Combined Farmers Backend Server Running Successfully!',
    services: ['Auction', 'Cart', 'Loan', 'Auth']
  });
});
app.listen(PORT, () => {
  console.log(`✅ Combined backend server running on http://localhost:${PORT}`);
});
