/*import User from '../models/user.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Basic password check (add hashing later for security)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Success
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
*/