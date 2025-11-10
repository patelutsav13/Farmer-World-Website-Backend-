

// server3.js

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');

// const app = express();
// const PORT = process.env.PORT || 5003;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/farmers-auth')
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch(err => console.error('❌ MongoDB connection error:', err));

// // Schema & Model
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// // ➤ Signup API
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

// // ➤ Login API
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

//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Internal server error during login' });
//   }
// });

// // ➤ Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/farmers-auth')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Schema & Model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  resetToken: String,
  resetTokenExpiry: Date
});

const User = mongoose.model('User', userSchema);
// 📩 Nodemailer Transporter (Gmail Example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_GMAIL ,
    pass: process.env.MY_GMAIL_PASS 
  },
  tls: {
    rejectUnauthorized: false 
  }
});

// ➤ Signup API
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

// ➤ Login API
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
    console.log('Login attempt:', email, password);
    console.log('Stored hash:', user.password);

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error during login' });
  }
});

// ➤ Forgot Password API
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not registered' });
    }

    // Generate token
    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    const resetLink = `http://localhost:3000/reset-password/${token}`;

    // Send email
    await transporter.sendMail({
  from: `"Farmers App" <${process.env.MY_GMAIL}>`,
  to: email,
  subject: 'Password Reset',
  html: `<p>You requested a password reset</p>
         <p>Click here to reset: <a href="${resetLink}">${resetLink}</a></p>
         <p>Link valid for 15 minutes</p>`
}).then(info => {
  console.log('Password reset email sent:', info.response);
}).catch(error => {
  console.error('Password reset email error:', error);
});
    res.json({ message: 'Password reset link sent to your email' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: 'Error sending reset link' });
  }
});
console.log(process.env.MONGO_URI);
console.log(process.env.JWT_SECRET);
console.log(process.env.MY_GMAIL);
console.log(process.env.MY_GMAIL_PASS);


// ➤ Reset Password API
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

app.post('/api/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log('RESET HIT: token =', token, ', password =', password);

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });
    console.log('Found user:', user ? user._id : 'none');

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('New hash:', hashedPassword);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    const after = await User.findById(user._id);
    console.log('After save in DB:', after.password);

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ message: 'Error resetting password' });
  }
});


// ➤ Start Server
app.listen(5003, () => {
  console.log(`🚀 Server running at http://localhost:${5003}`);
});
