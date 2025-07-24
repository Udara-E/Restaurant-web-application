import Contact from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    const newContact = new Contact({ fullName, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Enquiry submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
};
