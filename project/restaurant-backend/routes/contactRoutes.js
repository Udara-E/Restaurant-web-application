import express from 'express';
import { createContact, getContacts } from '../controller/contactController.js';

const router = express.Router();

router.post('/contact', createContact);
router.get('/admin/contact', getContacts); // Admin endpoint

export default router;
