/*import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  guests: String,
  date: String,
  time: String,
  note: String,
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Cancelled"],
    default: "Pending",
  },
}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model("Reservation", reservationSchema);
*/
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  guests: String,
  date: String,
  time: String,
  note: String,
  status: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model("Reservation", reservationSchema);
