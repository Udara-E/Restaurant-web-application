// Example using Mongoose for MongoDB
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
