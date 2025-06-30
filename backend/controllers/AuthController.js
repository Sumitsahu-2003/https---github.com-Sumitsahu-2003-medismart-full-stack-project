const User = require('../modelss/User'); // ✅ Fix the path if it's incorrect
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ✅ Register User
exports.register = async (req, res) => {
  try {
    console.log('Register request body:', req.body); // Debug

    const { name, email, password } = req.body;

    

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'user', // Optional if your schema has default
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('❌ Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// ✅ User Login
exports.login = async (req, res) => {
  try {
    console.log('Login request body:', req.body); // Debug

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
};

// ✅ Admin Login
exports.adminLogin = async (req, res) => {
  try {
    console.log('Admin login request body:', req.body); // Debug

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log('Admin not found');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log('Admin password mismatch');
      return res.status(400).json({ error: 'Invalid credentials' });
    }

   // if (user.role !== 'admin') {
    //console.log('User is not admin:', user.role);
    //return res.status(403).json({ error: 'Access denied. Not an admin.' });
   //}

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Admin login successful',
      token
    });

  } catch (err) {
    console.error('❌ Admin login error:', err);
    res.status(500).json({ error: 'Admin login failed' });
  }
};

// ✅ Dashboard (can be protected using JWT middleware)
exports.dashboard = (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard' });
};

// ✅ Placeholder: 2FA
exports.verify2FA = (req, res) => {
  res.status(200).json({ message: '2FA verification endpoint' });
};

// ✅ Placeholder: Password Recovery
exports.recoverPassword = (req, res) => {
  res.status(200).json({ message: 'Recover password request received' });
};
//patient login
exports.patientLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email and role
    const user = await User.findOne({ email, role: 'patient' });
    if (!user) {
      return res.status(400).json({ message: 'wrong user' });
    }
    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid credentialsss' });
    }
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Patient login error:', err);
    res.status(500).json({ message: 'Login failed' });
  }
};