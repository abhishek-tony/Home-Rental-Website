// server.js: Backend for the Home Rental System

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/homeRentalSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schemas and Models
const PropertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  description: String,
  imageUrl: String,
  available: Boolean,
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const BookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  propertyId: mongoose.Schema.Types.ObjectId,
  bookingDate: { type: Date, default: Date.now },
});

const Property = mongoose.model('Property', PropertySchema);
const User = mongoose.model('User', UserSchema);
const Booking = mongoose.model('Booking', BookingSchema);

// Routes

// Fetch all properties
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new property
app.post('/api/properties', async (req, res) => {
  const property = new Property(req.body);
  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Book a property
app.post('/api/book', async (req, res) => {
  const { userId, propertyId } = req.body;
  try {
    const property = await Property.findById(propertyId);
    if (!property || !property.available) {
      return res.status(400).json({ message: 'Property not available for booking' });
    }

    const booking = new Booking({ userId, propertyId });
    await booking.save();

    // Mark property as unavailable
    property.available = false;
    await property.save();

    res.status(201).json({ message: 'Property booked successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Reset Password
app.post('/api/reset-password', async (req, res) => {
  const { email, username } = req.body;
  try {
    const user = await User.findOne({ email, username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Password reset link sent to your email.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User Signup
app.post('/api/signup', async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// User Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
