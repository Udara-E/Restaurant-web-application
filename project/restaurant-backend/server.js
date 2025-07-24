


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";  // register
import cors from 'cors';
import menuRoutes from "./routes/menuRoutes.js"; // menuitem*/
//import categoryRoutes from "./routes/categoryRoutes.js";

import reservationRoutes from "./routes/reservation.js";
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(cors()); // allow frontend requests

app.use(express.json());

// Basic health check route (helpful for testing)
app.get("/", (req, res) => {
  res.send("API is running...");
});

//  Route middleware
app.use("/api/user", userRoutes);
app.use('/api', contactRoutes);

app.use("/api/reservations", reservationRoutes);

// Add menu route
app.use("/api/admin/menu", menuRoutes);
//app.use("/api/admin/categories", categoryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.error(err));

