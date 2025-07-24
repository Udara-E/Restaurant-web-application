

import User from "../models/user.js";
import bcrypt from "bcrypt";

import generateToken from "../utils/jwtToken.js";
// Register
export const register = async (req, res) => {
  const { name, email, phoneNo, password ,role} = req.body;
  console.log("Register body:", req.body); // ADD THIS
if (!name || !email || !phoneNo || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      phoneNo,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User Registered Successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    const token = generateToken(user._id);


    res.status(200).json({ message: "User logged in successfully",user:{
      id:user._id,
      email:user.email,
      Name:user.name,
      role:user.role,
      },
      token,

     });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length)
      return res.status(404).json({ message: "No users found" });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

// Filter users by name
export const filterUserByName = async (req, res) => {
  try {
    const users = await User.find({
      name: new RegExp(req.query.name, "i"),
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

