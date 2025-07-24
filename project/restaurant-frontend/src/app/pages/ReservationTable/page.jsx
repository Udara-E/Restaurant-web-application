

"use client";
import React, { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import axios from "axios";

const ReservationTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    guests: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/reservations/reg", formData);
      alert("Reservation added successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        guests: "",
        date: "",
        time: "",
        note: "",
      });
    } catch (error) {
      console.error("Error adding reservation:", error);
      alert("Failed to add reservation.");
    }
  };

  return (
    <MainLayout>
      <>
        {/* --- Popular Categories Section --- *
        <section className="bg-black text-white px-6 py-12 lg:flex lg:items-center lg:justify-between">
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            <Image src="/rice.jpg" alt="Rice" width={300} height={200} className="rounded-xl object-cover w-full h-full" />
            <Image src="/about.jpg" alt="About" width={300} height={200} className="rounded-xl object-cover w-full h-full my-10" />
            <Image src="/dinng.jpg" alt="Dining" width={300} height={200} className="rounded-xl object-cover w-full h-full" />
            <Image src="/passta.jpg" alt="Pasta" width={300} height={200} className="rounded-xl object-cover w-full h-80 my-10" />
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
            <p className="text-yellow-500 uppercase text-sm mb-2"> Now booking your Table</p>
            <h2 className="text-4xl font-extrabold mb-4">Reservation</h2>
            <p className="text-gray-300 mb-6">
              Whether it’s a laid-back coffee, an intimate dinner, or a lively weekend hangout,
              we’ve created a space that feels just right for every moment.
            </p>
          </div>
        </section>
*/}
        {/* Reservation Form Section */}
        <section className="py-5" style={{ backgroundImage: "url('/reservation.jpg')" }}>
          <div className="w-full lg:w-1/2 max-w-xl p-6 mx-auto bg-white text-black shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">Reserve a Table</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
              <textarea
                name="note"
                placeholder="Special Note"
                value={formData.note}
                onChange={handleChange}
                className="p-2 border rounded md:col-span-2"
              />
              <button
                type="submit"
                className="col-span-full bg-yellow-600 text-white p-2 rounded hover:bg-yellow-500"
              >
                Add Reservation
              </button>
            </form>
          </div>
        </section>
      </>
    </MainLayout>
  );
};

export default ReservationTable;