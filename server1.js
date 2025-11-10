// server1.js - Cart server

const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = 5001;
const mongoose = require('mongoose');
const OrderModel = require('./models/Order'); // Import Order model

// --- Middleware ---
app.use(cors({
  origin: 'http://localhost:3000', // React app origin
  credentials: true
}));

app.use(express.json());

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

// --- Initialize cart in session ---
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  next();
});

// --- Add product to cart ---
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

// --- Get current cart ---
app.get('/api/cart', (req, res) => {
  res.json({ cart: req.session.cart });
});

// --- Place an order ---
// app.post('/api/order', (req, res) => {
//   const { name, mobile, address, paymentType, totalAmount } = req.body;
//   const cart = req.session.cart;

//   if (!name || !mobile || !address || !paymentType) {
//     return res.status(400).json({ message: '❌ All fields are required.' });
//   }

//   if (!cart || cart.length === 0) {
//     return res.status(400).json({ message: '❌ Cart is empty.' });
//   }

//   // You could store the order in a DB here (e.g., MongoDB)
//   console.log('🛒 New Order:', {
//     customer: { name, mobile, address, paymentType },
//     items: cart,
//     totalAmount
//   });

//   req.session.cart = []; // Clear cart after order
//   res.status(201).json({ message: '✅ Order placed successfully!' });
// });

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

    await newOrder.save(); // Save to MongoDB

    console.log('🛒 Order saved in MongoDB:', newOrder);

    req.session.cart = []; // Clear cart after order
    res.status(201).json({ message: '✅ Order placed successfully!' });
  } catch (err) {
    console.error('❌ Error saving order:', err);
    res.status(500).json({ message: '❌ Failed to save order.' });
  }
});


// --- Default homepage for browser ---
app.get('/', (req, res) => {
  res.json({
    message: '🛒 Cart backend running',
    cart: req.session.cart || []
  });
});

// --- Debug endpoint ---
app.get('/api/debug', (req, res) => {
  res.json({
    sessionId: req.sessionID,
    cart: req.session.cart
  });
});


// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/farmersystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected for Cart Server'))
.catch((err) => console.error('❌ MongoDB connection error:', err));



// --- Start server ---
app.listen(PORT, () => {
  console.log(`✅ Cart server running on http://localhost:${PORT}`);
});
