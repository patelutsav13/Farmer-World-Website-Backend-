const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const MONGO_AUTH_URI = process.env.MONGO_AUTH_URI || 'mongodb://127.0.0.1:27017/farmers-auth';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

async function seed() {
  try {
    await mongoose.connect(MONGO_AUTH_URI);
    console.log('✅ Connected to MongoDB Auth Database');

    // Check if admin already exists
    const existing = await User.findOne({ email: 'admin@agri.com' });
    if (existing) {
      console.log('ℹ️ Admin user admin@agri.com already exists in database.');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin@123', 10);
    const adminUser = new User({
      username: 'System Administrator',
      email: 'admin@agri.com',
      password: hashedPassword
    });

    await adminUser.save();
    console.log('🎉 Admin user admin@agri.com successfully registered in MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding admin user:', err);
    process.exit(1);
  }
}

seed();
