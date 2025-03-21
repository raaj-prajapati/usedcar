const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import cors package

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/myapp';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
  });

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', UserSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Registration failed');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid password');
    }
    res.status(200).send('Login successful');
  } catch (error) {
    res.status(500).send('Login failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
